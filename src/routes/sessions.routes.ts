import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();

sessionsRouter.post('/auth', SessionsController.store);

export default sessionsRouter;
