const {Pool} = require('pg');

const pool = new Pool({
    user: 'aleveha',
    host: 'www.kom.tul.cz',
    database: 'kom_tul',
    password: '21022001qQ',
    port: 5000
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