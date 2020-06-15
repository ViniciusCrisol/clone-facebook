import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UsersController from './controllers/UsersController';

const routes = express.Router();
const upload = multer(multerConfig);

const userController = new UsersController();

routes.post('/create-user', upload.single('image'), userController.store);

export default routes;
