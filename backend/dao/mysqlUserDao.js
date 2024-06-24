import connection from "../config/database.js"
import UserDAO from "./userDAO.js"

/**
 * A User Data Access Object (DAO) implementation for interacting with user data
 * using a MySQL database.
 *
 * This class inherits from a base UserDAO class and  implements methods
 * specific to fetching, storing, and managing candidate data using MySQL database queries.
 */
class MySQLUserDAO extends UserDAO{
    /**
     * This function asynchronsly retrievs the candidates data by implementing
     * getCandidates method
     * @returns {results<object[]>} which resolves to an array of candidates
     */
    async getCandidates() {
        const query = "SELECT * FROM candidates";
        const [results] = await connection.query(query);
        return results;
      }

    getByCandidateId(id){
        const query = "SELECT * FROM candidates WHERE candidate_id = ?";
        return new Promise((resolve,reject) =>{
            connection.query(query,[id],(err,results) =>{
                if(err){
                    return reject(err);
                }
                if (results.length === 0) {
                    return resolve([]);
                }
                resolve(results[0])
            });
        });
    }

    getByCandidateEmail(email){
        const query = "SELECT * FROM candidates WHERE candidate_email = ?";
        return new Promise((resolve,reject) =>{
            connection.query(query,[email],(err,results) =>{
                if(err){
                    return reject(err);
                }
                if (results.length === 0) {
                    return resolve([]);
                }
                resolve(results[0])
            });
        });
    }

}
export default MySQLUserDAO;