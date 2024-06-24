import connection from "../config/database.js"

async function getCandidates(){
    const [rows] = await connection.query("SELECT * FROM candidates");
    return rows;
}

async function getByCandidateId(id){
    const [rows] = await connection.query(`
        SELECT * FROM candidates
        WHERE candidate_id = ?`, 
        [id]);
    return rows;
}

async function getByCandidateEmail(email){
    const [rows] = await connection.query(`
        SELECT * FROM candidates
        WHERE candidate_email = ?`, 
        [email]);
    return rows;
}
const candidates = await getByCandidateEmail("travy@gmail.com");
console.log(candidates);