
/**
 * A User Data Access Object (DAO) implementation for interacting with user data
 * 
 *
 * This class creates an abstract interface to interact with the database
 * It contains methods to be implemented for managing candidate
 * data using different database types
 */
class UserDAO {
    createCandidate(user) {
      throw new Error('Method not implemented.');
    }
  
    getCandidates() {
      throw new Error('Method not implemented.');
    }
  
    getCandidateById(id) {
      throw new Error('Method not implemented.');
    }

    getCandidateByEmail(email) {
        throw new Error('Method not implemented.');
      }
  

    updateCandidateByEmail(email, user) {
      throw new Error('Method not implemented.');
    }

  }
  export default UserDAO;
