import  express   from "express";
import {PORT} from "./config/config.js";
import candidateRoutes from './routes/candidateRoutes.js';
import { setUserDAO } from './controllers/candidateController.js';
import MySQLUserDAO from './dao/mysqlUserDao.js';

const app = express();

//Allow usage for Json 
app.use(express.json());

// Set the DAO implementation
setUserDAO(new MySQLUserDAO());

// Candidate Routes
app.use('/api/v1', candidateRoutes);

app.listen(PORT, () => console.log(`listening on port ${PORT}..`))