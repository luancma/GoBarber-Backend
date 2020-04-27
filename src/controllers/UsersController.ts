import { Request, Response } from 'express';

class UsersController {
  async update(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'ok' });
  }
}
export default new UsersController();
