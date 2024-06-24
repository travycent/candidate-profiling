import { Router } from 'express';
import {getCandidates} from '../controllers/candidateController.js'

//create a router
const router = Router();

//Generate the candidates routes
router.get('/candidates', getCandidates);

export default router;