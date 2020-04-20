import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';
import { Request, Response } from 'express';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

class AppointmentsController {
  async index(request: Request, response: Response): Promise<Response> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointments = await appointmentsRepository.find();

    return response.json(appointments);
  }

  async store(request: Request, response: Response): Promise<Response> {
    try {
      const { date, provider } = request.body;

      const parsedDate = parseISO(date);

      const createAppointment = new CreateAppointmentService();

      const appointment = await createAppointment.execute({
        provider,
        date: parsedDate,
      });

      return response.json(appointment);
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}
export default new AppointmentsController();
