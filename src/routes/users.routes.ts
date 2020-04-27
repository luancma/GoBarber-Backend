import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';

import UsersController from '../controllers/UsersController';
import validateAutheticate from '../middlewares/validateAutheticate';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.patch(
  '/avatar',
  validateAutheticate,
  upload.single('avatar'),
  UsersController.update,
);

export default usersRouter;
