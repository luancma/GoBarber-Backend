import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/create', (request, response) => {
  try {
    const { date, provider } = request.body;

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    const parsedDate = parseISO(date);

    const appointment = createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.json(appointment);
  } catch (error) {
    return response.status(400).json({
      error: error.message,
    });
  }
});

export default appointmentsRouter;
