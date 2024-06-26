import {setUserDAO, getCandidates,getByCandidateId,getByCandidateEmail,createCandidate} from '../controllers/candidateController.js'

import { jest } from '@jest/globals';

const mockRes = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('User Controller', () => {
    let userDAO;
    let req;
    let res;

    beforeEach(() => {
        userDAO = {
            getCandidates: jest.fn(),
            getByCandidateId: jest.fn(),
            getByCandidateEmail: jest.fn(),
            createCandidate: jest.fn(),
            updateCandidateByEmail: jest.fn()
        };
        setUserDAO(userDAO);
        res = mockRes();
    });

    describe('getCandidates', () => {
        it('should return 200 with candidates data', async () => {
            const candidates = [{ id: 1, name: 'Matsiko Innocent' }];
            userDAO.getCandidates.mockResolvedValue(candidates);

            await getCandidates(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ success: true, data: candidates });
        });

        it('should return 500 if there is an error', async () => {
            const errorMessage = 'Database error';
            userDAO.getCandidates.mockRejectedValue(new Error(errorMessage));

            await getCandidates(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ success: false, message: errorMessage });
        });
    });

    describe('getByCandidateId', () => {
        beforeEach(() => {
            req = { params: { id: 1 } };
        });

        it('should return 200 with candidate data', async () => {
            const candidate = { id: 1, name: 'Matsiko Innocent' };
            userDAO.getByCandidateId.mockResolvedValue(candidate);

            await getByCandidateId(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ success: true, data: candidate });
        });

        it('should return 404 if candidate not found', async () => {
            userDAO.getByCandidateId.mockResolvedValue(null);

            await getByCandidateId(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Candidate not found' });
        });

        it('should return 500 if there is an error', async () => {
            const errorMessage = 'Some error occured';
            userDAO.getByCandidateId.mockRejectedValue(new Error(errorMessage));

            await getByCandidateId(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ success: false, message: errorMessage });
        });
    });

    describe('getByCandidateEmail', () => {
        beforeEach(() => {
            req = { params: { email: 'test@example.com' } };
        });

        it('should return 200 with candidate data', async () => {
            const candidate = { email: 'test@example.com', name: 'Matsiko Innocent' };
            userDAO.getByCandidateEmail.mockResolvedValue(candidate);

            await getByCandidateEmail(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ success: true, data: candidate });
        });

        it('should return 404 if candidate not found', async () => {
            userDAO.getByCandidateEmail.mockResolvedValue(null);

            await getByCandidateEmail(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Candidate not found' });
        });

        it('should return 500 if there is an error', async () => {
            const errorMessage = 'Database error';
            userDAO.getByCandidateEmail.mockRejectedValue(new Error(errorMessage));

            await getByCandidateEmail(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ success: false, message: errorMessage });
        });
    });

    describe('createCandidate', () => {
        beforeEach(() => {
            req = { body: { candidate_firstname: 'John', candidate_lastname: 'Doe', candidate_email: 'test@example.com', text_comment: 'Comment' } };
        });

        it('should create a candidate and return 201', async () => {
            userDAO.getByCandidateEmail.mockResolvedValue(null);
            userDAO.createCandidate.mockResolvedValue({ id: 1 });

            await createCandidate(req, res);

            expect(userDAO.createCandidate).toHaveBeenCalledWith(req.body);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ success: true, data: { id: 1 } });
        });

        it('should update a candidate and return 200', async () => {
            userDAO.getByCandidateEmail.mockResolvedValue({ id: 1 });
            userDAO.updateCandidateByEmail.mockResolvedValue({ id: 1 });

            await createCandidate(req, res);

            expect(userDAO.updateCandidateByEmail).toHaveBeenCalledWith(req.body.candidate_email, req.body);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ success: true, data: { id: 1 } });
        });

        it('should return 400 if required fields are missing', async () => {
            req.body = { candidate_firstname: '', candidate_lastname: '', candidate_email: '', text_comment: '' };

            await createCandidate(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Missing or empty required fields: candidate_firstname, candidate_lastname, candidate_phone_number, and candidate_email are required.' });
        });

        it('should return 500 if there is an error', async () => {
            const errorMessage = 'Database error';
            userDAO.getByCandidateEmail.mockRejectedValue(new Error(errorMessage));

            await createCandidate(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ success: false, message: errorMessage });
        });
    });
});
