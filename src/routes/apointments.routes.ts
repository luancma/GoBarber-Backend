import { Router } from 'express';
import AppointmentsController from '../controllers/AppointmentsController';
import validateAutheticate from '../middlewares/validateAutheticate';

const appointmentsRouter = Router();

appointmentsRouter.use(validateAutheticate);

appointmentsRouter.get('/', AppointmentsController.index);

appointmentsRouter.post('/create', AppointmentsController.store);

export default appointmentsRouter;
