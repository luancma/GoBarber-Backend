import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

class UsersController {
  async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const { id, created_at, updated_at } = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json({
      id,
      name,
      email,
      created_at,
      updated_at,
    });
  }
}
export default new UsersController();
