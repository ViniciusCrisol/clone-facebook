import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UsersController from './controllers/UsersController';
import SessionController from './controllers/SessionController';
import SearchController from './controllers/SearchController';

import authMiddleware from './middlewares/auth';

const routes = express.Router();
const upload = multer(multerConfig);

const userController = new UsersController();
const sessionController = new SessionController();
const searchController = new SearchController();

routes.post('/create-user', upload.single('image'), userController.store);
routes.post('/create-session', sessionController.store);

routes.use(authMiddleware);

routes.put('/update-user-data/:id', userController.update);

routes.get('/search/:search', searchController.store);

export default routes;
