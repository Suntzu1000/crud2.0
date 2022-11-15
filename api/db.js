import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '93560857g',
    database: 'crud02'
})