import React , {useState,useEffect}  from 'react';
import ApiCalls from "../api/ApiCalls";



export default function EditUserModal({show, selectedRow,handleClose}) {
    const [candidateData, setCandidate] = useState({
        candidate_firstname: '',
        candidate_lastname: '',
        candidate_phone_number: '',
        candidate_email: '',
        time_interval: '',
        linkedin_profile: '',
        github_profile: '',
        text_comment: ''
      });
      
      useEffect(() => {
        if (selectedRow) {
            setCandidate({
                candidate_firstname: selectedRow.candidate_firstname || '',
                candidate_lastname: selectedRow.candidate_lastname || '',
                candidate_phone_number: selectedRow.candidate_phone_number || '',
                candidate_email: selectedRow.candidate_email || '',
                time_interval: selectedRow.time_interval || '',
                linkedin_profile: selectedRow.linkedin_profile || '',
                github_profile: selectedRow.github_profile || '',
                text_comment: selectedRow.text_comment || ''
            });
        }
    }, [selectedRow]);

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidate({ ...candidateData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = "/candidates";
          const response = await ApiCalls.postData(url, candidateData); 
          setMessage('Candidate edited successfully!');
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
        <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Candidate</h5>
                        <button type="button" className="close ms-3" onClick={handleClose}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {selectedRow && (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="form_candidate_firstname">First Name (*):</label>
                                    <input
                                    type="text"
                                    name="candidate_firstname"
                                    value={candidateData.candidate_firstname}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='form_candidate_firstname'
                                    required
                                    
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form_candidate_lastname">Last Name (*):</label>
                                    <input
                                    type="text"
                                    name="candidate_lastname"
                                    value={candidateData.candidate_lastname}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='form_candidate_lastname'
                                    required
                                    
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form_candidate_email">Email (*):</label>
                                    <input
                                    type="email"
                                    name="candidate_email"
                                    value={candidateData.candidate_email}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='form_candidate_email'
                                    required
                                    
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form_candidate_phone_number">Phone Number :</label>
                                    <input
                                    type="tel"
                                    name="candidate_phone_number"
                                    value={candidateData.candidate_phone_number}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='form_candidate_phone_number'
                                    
                                />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="form_time_interval">Time Interval :</label>
                                    <input
                                    type="text"
                                    name="time_interval"
                                    value={candidateData.time_interval}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='form_time_interval'
                                    
                                />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="form_linkedin_profile">LinkedIn Profile :</label>
                                    <input
                                    type="url"
                                    name="linkedin_profile"
                                    value={candidateData.linkedin_profile}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='form_linkedin_profile'
                                    
                                />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="form_github_profile">GitHub Profile :</label>
                                    <input
                                    type="url"
                                    name="github_profile"
                                    value={candidateData.github_profile}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='form_github_profile'
                                    
                                />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form_text_comment">Comment (*):</label>
                                    <input
                                    type="text"
                                    name="text_comment"
                                    value={candidateData.text_comment}
                                    onChange={handleChange}
                                    className='form-control'
                                    id='form_text_comment'
                                    
                                />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleClose} >Close</button>
                                    <button type="submit" className="btn btn-primary" >Save Changes</button>
                                    {message && <p style={{ color: 'green' }}>{message}</p>}
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                </div>
                            </form>
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}