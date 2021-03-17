const { Pool } = require('pg');
require('dotenv').config({path: '../.env'});

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT
});

const checkUser = (body) => {
    const {login, password} = body;
    return new Promise(((resolve, reject) => {
        pool.query(
            `select * from accounts where login='${login}';`,
            (error, result) => {
                if (error) reject(error);
                if (result && result.rows && result.rows.length > 0) {
                    resolve(result.rows[0].password === password);
                } else {
                    resolve(false);
                }
            }
        )
    }));
}

const addUser = (body) => {
    const {login, password} = body;
    return new Promise(((resolve, reject) => {
        pool.query(
            `insert into accounts(login, password) values('${login}', '${password}');`,
            (error, result) => {
                if (error) reject(error);
                resolve(true);
            }
        );
    }
))
}

module.exports = {
    checkUser,
    addUser
}