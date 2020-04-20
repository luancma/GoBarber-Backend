import { Router } from 'express';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();

appointmentsRouter.get('/', AppointmentsController.index);

appointmentsRouter.post('/create', AppointmentsController.store);

export default appointmentsRouter;
