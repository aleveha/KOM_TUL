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
        pool.query('select * from news limit 10', (error, results) => {
            if(error) reject(error);
            resolve(results.rows);
        })
    }))
}

const getAllNews = () => {
    return new Promise(((resolve, reject) => {
        pool.query('select * from news', (error, results) => {
            if(error) reject(error);
            resolve(results.rows);
        })
    }))
}

const addNews = (body) => {
    const {date, name, content} = body;
    return new Promise(((resolve, reject) => {
        pool.query(
            'insert into news(date, name, content) values($1 $2 $3)',
            [date, name, content],
            (error, result) => {
                if(error) reject(error);
                resolve("News has been added");
            }
        )
    }));
}

module.exports = {
    getTopNews,
    getAllNews,
    addNews
}