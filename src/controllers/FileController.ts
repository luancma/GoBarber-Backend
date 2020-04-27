import { Request, Response } from 'express';

class FileController {
  async update(request: Request, response: Response) {
    return response.json({
      message: 'Update file',
    });
  }
}
export default FileController;
