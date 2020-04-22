import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const appointmentsRouter = Router();

appointmentsRouter.post('/create', UsersController.store);

export default appointmentsRouter;
