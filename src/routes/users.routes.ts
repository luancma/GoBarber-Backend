import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';

import UsersController from '../controllers/UsersController';
import validateAutheticate from '../middlewares/validateAutheticate';
import FileController from '../controllers/FileController';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', UsersController.store);

usersRouter.patch(
  '/avatar',
  validateAutheticate,
  upload.single('avatar'),
  FileController.update,
);

export default usersRouter;
