class Appointment {
  id: number;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = Date.now();
    this.provider = provider;
    this.date = date;
  }
}
export default Appointment;
