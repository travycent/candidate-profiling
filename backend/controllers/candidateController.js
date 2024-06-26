let userDAO;

/**
 * Sets the User DAO to be used by this module.
 * 
 * This function allows for dependency injection of the User DAO.
 * 
 * @param {object} dao - The User DAO object to be used.
 */
export const setUserDAO = (dao) => {
    userDAO = dao
};

/**
 * Fetches candidate data and sends it as a JSON response.
 * 
 * This function retrieves candidate data using the injected User DAO and
 * sends the results as a JSON response to the provided request and response objects.
 * 
 * @param {object} req - The incoming HTTP request object.
 * @param {object} res - The outgoing HTTP response object.
 */
export const getCandidates = async (req, res) => {
  try {
      const results = await userDAO.getCandidates();
      res.status(200).json({ success: true, data: results });
  } catch (err) {
      res.status(500).json({ success: false, message: err.message });
  }
};


/**
 * Fetches candidate data based on ID and sends it as a JSON response.
 * 
 * This function retrieves candidate data using the injected User DAO and
 * sends the results as a JSON response to the provided request and response objects.
 * 
 * @param {object} req - The incoming HTTP request object.
 * @param {object} res - The outgoing HTTP response object.
 */
export const getByCandidateId = async (req, res) => {
  try {
      const { id } = req.params;
      const result = await userDAO.getByCandidateId(id);
      
      if (!result) {
          return res.status(404).json({ success: false, message: 'Candidate not found' });
      }
      
      res.status(200).json({ success: true, data: result });
  } catch (err) {
      res.status(500).json({ success: false, message: err.message });
  }
};


/**
 * Fetches candidate data based on email and sends it as a JSON response.
 * 
 * This function retrieves candidate data using the injected User DAO and
 * sends the results as a JSON response to the provided request and response objects.
 * 
 * @param {object} req - The incoming HTTP request object.
 * @param {object} res - The outgoing HTTP response object.
 */
export const getByCandidateEmail = async (req, res) => {
  try {
      const { email } = req.params;
      const result = await userDAO.getByCandidateEmail(email);
      
      if (!result) {
          return res.status(404).json({ success: false, message: 'Candidate not found' });
      }
      
      res.status(200).json({ success: true, data: result });
  } catch (err) {
      res.status(500).json({ success: false, message: err.message });
  }
};


/**
 * Creates or updates a  user  and sends it as a JSON response.
 * The method checks if an existing user exists based on email 
 * If they do exist it updates their data and else it creates a new candidate
 * This function creates/updates candidate data using the injected User DAO and
 * sends the results as a JSON response to the provided request and response objects.
 * 
 * @param {object} req - The incoming HTTP request object.
 * @param {object} res - The outgoing HTTP response object.
 */
  export const createCandidate = async (req, res) => {
    try {
        const user = req.body;
        if (
            !user.candidate_firstname || user.candidate_firstname.trim() === '' ||
            !user.candidate_lastname || user.candidate_lastname.trim() === '' ||
            !user.text_comment || user.text_comment.trim() === '' ||
            !user.candidate_email || user.candidate_email.trim() === ''
        ) {
            return res.status(400).json({ success: false,message: 'Missing or empty required fields: candidate_firstname, candidate_lastname, candidate_phone_number, and candidate_email are required.' });
        }
        let result;
        const candidateExists = await userDAO.getByCandidateEmail(user.candidate_email);
        //update existing user
        if(candidateExists){
            // Update the existing candidate
            result = await userDAO.updateCandidateByEmail(user.candidate_email, user);
            res.status(200).json({ success: true, data: result });
        }
        else{
            // Insert the new candidate
        result = await userDAO.createCandidate(user);
        res.status(201).json({ success: true, data: result });
        }
    } catch (err) {
        res.status(500).json({ success: false,message: err.message });
    }

  };
