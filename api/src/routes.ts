import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UsersController from './controllers/UsersController';
import SessionController from './controllers/SessionController';

const routes = express.Router();
const upload = multer(multerConfig);

const userController = new UsersController();
const sessionController = new SessionController();

// User
routes.post('/create-user', upload.single('image'), userController.store);
routes.put('/update-user-data/:id', userController.update);

// Session
routes.post('/create-session', sessionController.store);

export default routes;
