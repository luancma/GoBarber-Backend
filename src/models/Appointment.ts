class Appointment {
  id: number;

  provider: string;

  date: Date;

  constructor(provider: string, date: Date) {
    this.id = Date.now();
    this.provider = provider;
    this.date = date;
  }
}
export default Appointment;
