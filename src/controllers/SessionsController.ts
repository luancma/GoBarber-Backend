import { Request, Response } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionsController {
  async store(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateSession = new AuthenticateUserService();

    const {
      user: { id, name, created_at, updated_at },
      token,
    } = await authenticateSession.execute({
      email,
      password,
    });

    return response.json({ id, name, email, created_at, updated_at, token });
  }
}
export default new SessionsController();
