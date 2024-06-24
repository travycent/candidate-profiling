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
export const getCandidates = (req,res) =>{
    userDAO.getCandidates()
     .then(results => res.status(200).json(results))
     .catch(err => res.status(500).json({error: err.message}));
};
