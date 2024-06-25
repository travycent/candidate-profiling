import { Router } from 'express';
import {getCandidates,getByCandidateId,getByCandidateEmail,createCandidate} from '../controllers/candidateController.js'

//create a router
const router = Router();

//Generate the candidates routes
router.post('/candidates', createCandidate);
router.get('/candidates', getCandidates);
router.get('/candidates-id/:id', getByCandidateId);
router.get('/candidates-email/:email', getByCandidateEmail);




export default router;