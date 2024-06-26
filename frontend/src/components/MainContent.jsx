import React,{ useState, useEffect }  from "react";
import CandidatesModel from "../models/CandidatesModel";

import EditUserModal from "../modals/EditUserModal";
import AddUserModal from "../modals/AddUserModal";
import ProfileModal from "../modals/ProfileModal";
export default function MainContent(){

    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() =>{
        const getCandidates = async () =>{
            try{
                const candidates = await CandidatesModel.fetchAllCandidates();
                setCandidates(candidates);
            }
            catch(error){
                setError(error.message);
                setLoading(false);
            }
            finally{
                setLoading(false);
            }
            
        }
        getCandidates();
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectdRow] =useState(null);

    
    const handleShow =(row)=>{
        setShowModal(true)
        setSelectdRow(row)
    }
    const handleClose =()=>{
        setShowModal(false)
        setSelectdRow(null)
    }

    {/**Handle show profile modal */}
    const [showProfileModal, setShowProfileModal] = useState(false);
    const handleShowProfileModal =(row)=>{
        setShowProfileModal(true)
        setSelectdRow(row)
    }
    const handleCloseProfile =()=>{
        setShowProfileModal(false)
        setSelectdRow(null)
    }
    {/*add user modal states */}
    const [showAddModal, setShowAddModal] = useState(false);

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    
    return(
        <div className=" container">
        <main>
            <button className="btn btn-primary my-3" onClick={handleShowAddModal}>Add New</button>
            {/* AddUserModal component */}
            <AddUserModal show={showAddModal} handleClose={handleCloseAddModal} />
            <table className="table table-striped table-hover" >
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Time Interval</th>
                    <th>Create Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {candidates.map((candidate) => (
                    <tr key={candidate.candidate_id}>
                    <td>{candidate.candidate_id}</td>
                    <td>{candidate.candidate_firstname + " " + candidate.candidate_lastname}</td>
                    <td>{candidate.candidate_email}</td>
                    <td>{candidate.candidate_phone_number}</td>
                    <td>{candidate.time_interval}</td>
                    <td>{candidate.create_date}</td>
                        <td>
                            <button onClick={()=>handleShow(candidate)} className="btn btn-primary me-3" >Edit</button>
                            <button onClick={()=>handleShowProfileModal(candidate)} className="btn btn-secondary">View</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </main>
        
        <EditUserModal
            show={showModal}
             selectedRow={selectedRow}
             handleClose={handleClose}
             />
        <ProfileModal
            show={showProfileModal}
             selectedRow={selectedRow}
             handleClose={handleCloseProfile}
             />
        

        </div>
    );
}