/** 
 * Rota / Recurso
 * Rota: corresponde ao caminho completo de acesso 
 * Recurso: corresponde ao que vem depois da '/' na rota
*/

/**
 * Métodos HTTP:
 * 
 * GET: Busca uma informação no back-end
 * POST: Cria uma informação
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação e etc.)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * O request guarda todos os dados provindos da requisição
 * O response retorna uma resposta para o usuário
 */


 /**
  * SQL: MySQL, SQLite, PostgreSQL, Microsfot SQL Server, etc
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

// Importa as funcionalidades do expresss.
// A variável express contêm todas as funcionalidades do pacote.
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// A variável app será responsável pela aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// localhost:3333
app.listen(3333);