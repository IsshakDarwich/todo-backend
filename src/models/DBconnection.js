'use strict';

const mysql = require("mysql");
const util = require("util");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: '3306',
    user: 'admin_todo',
    password: 'admin',
    database: 'todo'
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
});

pool.query = util.promisify(pool.query);// Magic -> enables async/await on querys

module.exports = pool;