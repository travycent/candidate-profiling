import React , {useState}  from 'react';
import ApiCalls from "../api/ApiCalls";
export default function AddUserModal ({ show, handleClose }) {
    const [candidate, setCandidate] = useState({
        candidate_firstname: '',
        candidate_lastname: '',
        candidate_phone_number: '',
        candidate_email: '',
        time_interval: '',
        linkedin_profile: '',
        github_profile: '',
        text_comment: ''
      });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidate({ ...candidate, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = "/candidates";
          const response = await ApiCalls.postData(url, candidate); 
          setMessage('Candidate added successfully!');
          setError('');
          setCandidate({
            candidate_firstname: '',
            candidate_lastname: '',
            candidate_phone_number: '',
            candidate_email: '',
            time_interval: '',
            linkedin_profile: '',
            github_profile: '',
            text_comment: ''
          });
          handleClose();
          
        } catch (err) {
          setMessage('');
          setError(err.message);
        }
      };
    return (
        <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New Candidate</h5>
                        <button type="button" className="close ms-3" onClick={handleClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="candidate_firstname" className="form-label">First Name (*):</label>
                                <input
                                    type="text"
                                    name="candidate_firstname"
                                    value={candidate.candidate_firstname}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='candidate_firstname'
                                    required
                                    
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="candidate_lastname" className="form-label">Lastname Name (*):</label>
                                <input
                                    type="text"
                                    name="candidate_lastname"
                                    value={candidate.candidate_lastname}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='candidate_lastname'
                                    required
                                    
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="candidate_email" className="form-label">Email (*):</label>
                                <input
                                    type="email"
                                    name="candidate_email"
                                    value={candidate.candidate_email}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='candidate_email'
                                    required
                                    
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="candidate_phone_number" className="form-label">Phone Number:</label>
                                <input
                                    type="tel"
                                    name="candidate_phone_number"
                                    value={candidate.candidate_phone_number}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='candidate_phone_number'
                                    
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="linkedin_profile" className="form-label">LinkedIn Profile:</label>
                                <input
                                    type="url"
                                    name="linkedin_profile"
                                    value={candidate.linkedin_profile}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='linkedin_profile'
                                    
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="github_profile" className="form-label">GitHub Profile:</label>
                                <input
                                    type="url"
                                    name="github_profile"
                                    value={candidate.github_profile}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='github_profile'
                                    
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="time_interval" className="form-label">Time Interval:</label>
                                <input
                                    type="text"
                                    name="time_interval"
                                    value={candidate.time_interval}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='time_interval'
                                    
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="text_comment" className="form-label">Comment (*):</label>
                                <textarea
                                    
                                    name="text_comment"
                                    value={candidate.text_comment}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='text_comment'
                                    required
                                    
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                                <button type="submit" className="btn btn-primary">Add User</button>
                                {message && <p style={{ color: 'green' }}>{message}</p>}
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


