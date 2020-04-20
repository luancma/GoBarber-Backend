import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

// We need to pass the Model name
@EntityRepository(Appointment)
// We also need to pass the Model name like a parameter
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: {
        date,
      },
    });

    return findAppointment || null;
  }
}
export default AppointmentsRepository;
