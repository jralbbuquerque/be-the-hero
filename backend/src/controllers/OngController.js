// Biblioteca utilizada para gerar id aleatórios
const crypto = require('crypto');

// Importa as configurações do banco de dados
const connection = require('../database/connection');

module.exports = {
    // Lista as Ongs
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    
    // Cria as ongs utilizando um objeto json
    async create(request, response) {
        // Armazena os dados recebidos da requisição
        const { name, email, whatsapp, city, uf } = request.body;

        // Cria um ID aleatório
        const id = crypto.randomBytes(4).toString('HEX');
        
        // insere os valores no banco de dados
        // o await espera a finalização da inserção para continuar o código
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return response.json({ id });
    }
};