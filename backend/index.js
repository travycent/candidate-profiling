import  express   from "express";
import {PORT} from "./config/config.js";
import candidateRoutes from './routes/candidateRoutes.js';
import { setUserDAO } from './controllers/candidateController.js';
import MySQLUserDAO from './dao/mysqlUserDao.js';
import cors from 'cors';
// import cache from "express-cache-memory"
//import dotenv


const app = express();


//Allow usage for Json 
app.use(express.json());

//config cors
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

// Configure cache middleware with options
// const cacheMiddleware = cache({
//     maxAge: 60000, 
//     statusCodes: [200] 
//   });

// // Apply cache middleware to all routes
// app.use(cacheMiddleware); 

// Set the DAO implementation
setUserDAO(new MySQLUserDAO());

// Candidate Routes
app.use('/api/v1', candidateRoutes);

app.listen(PORT, () => console.log(`listening on port ${PORT}..`))