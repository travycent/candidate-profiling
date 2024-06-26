import React from "react";

export default function EditUserModal({show, selectedRow,handleClose}) {
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
                            <form>
                                <div className="form-group">
                                    <label htmlFor="formFullname">Fullname</label>
                                    <input type="text" className="form-control" id="formFullname" value={selectedRow.candidate_firstname + " " + selectedRow.candidate_lastname } />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formEmail">Email</label>
                                    <input type="email" className="form-control" id="formEmail" value={selectedRow.candidate_email} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formPhoneNumber">Phone Number</label>
                                    <input type="text" className="form-control" id="formPhoneNumber" value={selectedRow.candidate_phone_number} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formTimeInterval">Time Interval</label>
                                    <input type="text" className="form-control" id="formTimeInterval" value={selectedRow.time_interval} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="linkedin_profile">Linkedin Profile</label>
                                    <input type="text" className="form-control" id="linkedin_profile" value={selectedRow.linkedin_profile} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="github_profile">Github Profile</label>
                                    <input type="text" className="form-control" id="github_profile" value={selectedRow.github_profile} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="linkedin_profile">Comment</label>
                                    <textarea className="form-control" id="text_comment" value={selectedRow.text_comment} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formCreateDate">Create Date</label>
                                    <input type="text" className="form-control" id="formCreateDate" value={selectedRow.create_date} />
                                </div>
                            </form>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose} >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}