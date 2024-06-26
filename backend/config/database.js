import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
/**
 * Connect to the Mysql Database
 * export the connection string
 */

const connection = mysql.createPool({
    host : process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
});


export default connection;

