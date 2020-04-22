import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

class UsersController {
  async store(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      const createUser = new CreateUserService();

      const { created_at, id } = await createUser.execute({
        name,
        email,
        password,
      });

      return response.json({ id, name, email, created_at });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export default new UsersController();
