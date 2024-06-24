import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
/**
 * Connect to the Mysql Database
 * export the connection string
 */
const connection = mysql.createPool({
        host : '127.0.0.1',
        port: '3306',
        user : 'root',
        password : 'root',
        database : 'node_sigma_db',
    });

export default connection;

