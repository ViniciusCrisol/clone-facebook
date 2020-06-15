import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// import SessionController from './controllers/SessionController';

const routes = express.Router();
const upload = multer(multerConfig);

// const SessionController = new SessionController();

// routes.post('/user', userController.index);

export default routes;
