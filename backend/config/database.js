import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
        host : '127.0.0.1',
        port: '3306',
        user : 'root',
        password : 'root',
        database : 'node_sigma_db',
    });

// const pool = mysql.createPool({
//     host : process.env.MYSQL_HOST,
//     port: process.env.MYSQL_PORT,
//     user : process.env.MYSQL_USER,
//     password : process.env.MYSQL_PASSWORD,
//     database : process.env.MYSQL_DATABASE,
// });


async function getCandidates(){
    const [rows] = await pool.query("SELECT * FROM candidates");
    return rows;
}
const candidates = await getCandidates();
// const vale = process.env.MYSQL_PASSWORD
console.log(candidates);