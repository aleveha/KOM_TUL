const { Pool } = require('pg');

const pool = new Pool({
    user: 'aleveha',
    host: 'www.kom.tul.cz',
    database: 'kom_tul',
    password: '21022001qQ',
    port: 5000
});

const getTopNews = () => {
    return new Promise(((resolve, reject) => {
        pool.query('select * from news order by id desc limit 10;', (error, results) => {
            if(error) reject(error);
            resolve(results.rows);
        })
    }))
}

const getAllNews = () => {
    return new Promise(((resolve, reject) => {
        pool.query('select * from news order by id desc;', (error, results) => {
            if(error) reject(error);
            resolve(results.rows);
        })
    }))
}

const addNews = (body) => {
    const {date, name, content} = body;
    return new Promise(((resolve, reject) => {
        pool.query(
            `insert into news(date, name, content) values('${date}', '${name}', '${content}');`,
            (error, result) => {
                if(error) {
                    reject(error);
                }
                resolve(true);
            }
        )
    }));
}

const deleteNews = (body) => {
    const {id, name} = body;
    return new Promise(((resolve, reject) => {
        pool.query(
            `delete from news where id=${id} and name='${name}';`,
            (error) => {
                if(error) {
                    reject(error);
                }
                resolve(true);
            }
        );
    }));
}

module.exports = {
    getTopNews,
    getAllNews,
    addNews,
    deleteNews
}