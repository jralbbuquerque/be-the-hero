const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        // Esquema de paginação
        const { page = 1 } = request.query;
        
        // Retorna para o front-end o total de registros
        const [count] = await connection('incidents')
            .count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*', 
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        
        // Há informações que são enviadas pelo header e não pelo body, informações de autenticação como login
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if(incidents.ong_id != ong_id){
            // Status hhtp (https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
            return response.status(401).json({ error: "Operation not permitted." });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};