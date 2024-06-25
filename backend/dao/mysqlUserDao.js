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

    /**
     * This function asynchronsly retrievs the candidates data by implementing
     * getCandidatesId method
     * @param {id} -- User ID
     * @returns {results<object[]>} which resolves to an array of candidates
     */
    async getByCandidateId(id) {
        const query = "SELECT * FROM candidates WHERE candidate_id = ?";
        const [results] = await connection.query(query, [id]);
        return results.length ? results[0] : null;
    }
 
    /**
     * This function asynchronsly retrievs the candidates data by implementing
     * getCandidatesId method
     * @param {id} -- User ID
     * @returns {results<object[]>} which resolves to an array of candidates
     */
    async getByCandidateEmail(email){
        const query = "SELECT * FROM candidates WHERE candidate_email = ?";
        const [results] = await connection.query(query, [email]);
        return results.length ? results[0] : null;
    }

    /**
     * This function asynchronsly creates the candidates data by implementing
     * createCandidate method
     * Checks for required fields and retuns a 400 bad request response for missing values 
     * @param {user} -- User object
     * @returns {results<object[]>} which resolves to an array of candidates
     */
    async createCandidate(user) {
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const { candidate_firstname,candidate_lastname, candidate_phone_number, candidate_email, time_interval, linkedin_profile, github_profile, text_comment } = user;
        const query = 'INSERT INTO candidates (candidate_firstname, candidate_lastname, candidate_phone_number, candidate_email, time_interval, linkedin_profile, github_profile, text_comment, create_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const [result] = await connection.query(query, [candidate_firstname, candidate_lastname, candidate_phone_number, candidate_email, time_interval, linkedin_profile, github_profile, text_comment, currentDate]);
        return { id: result.insertId, ...user };
    }

    /**
     * This function asynchronsly updates the candidates data by implementing
     * updateCandidateByEmail method
     * Checks for required fields and retuns a 400 bad request response for missing values 
     * @param {user} -- User object
     * @returns {results<object[]>} which resolves to an array of candidates
     */
    async updateCandidateByEmail(email, user) {
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        // Check for required fields and ensure they are not empty
        const {
          candidate_firstname,
          candidate_lastname,
          candidate_phone_number,
          time_interval,
          linkedin_profile,
          github_profile,
          text_comment
        } = user;
    
        // Construct the query
        const query = `
          UPDATE candidates SET 
            candidate_firstname = ?, 
            candidate_lastname = ?, 
            candidate_phone_number = ?, 
            time_interval = ?, 
            linkedin_profile = ?, 
            github_profile = ?, 
            text_comment = ?,
            update_date = ?
          WHERE candidate_email = ?
        `;
    
        // Execute the query
        const [result] = await connection.query(query, [
          candidate_firstname,
          candidate_lastname,
          candidate_phone_number,
          time_interval,
          linkedin_profile,
          github_profile,
          text_comment,
          currentDate,
          email
        ]);
    
        // Check if any rows were affected 
        if (result.affectedRows === 0) {
          throw new Error('No candidate found with the provided email.');
        }
    
        // Return the updated candidate
        return { ...user, candidate_email: email };
      
    }

}
export default MySQLUserDAO;