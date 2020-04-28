import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

class FileController {
  async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    const {
      id,
      name,
      email,
      avatar,
      created_at,
      updated_at,
    } = await updateAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    return response.json({
      id,
      name,
      email,
      avatar,
      created_at,
      updated_at,
    });
  }
}
export default new FileController();
