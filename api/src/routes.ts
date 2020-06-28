import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import SearchController from './controllers/SearchController';
import FriendRequestController from './controllers/FriendRequestController';
import FriendController from './controllers/FriendController';
import AvatarController from './controllers/AvatarController';
import PostController from './controllers/PostController';

import authMiddleware from './middlewares/auth';

const routes = express.Router();
const upload = multer(multerConfig);

const userController = new UserController();
const sessionController = new SessionController();
const searchController = new SearchController();
const friendRequestController = new FriendRequestController();
const friendController = new FriendController();
const avatarController = new AvatarController();
const postController = new PostController();

// Sign Up/Sign In

routes.post('/create-user', upload.single('image'), userController.store);
routes.post('/create-session', sessionController.store);

routes.use(authMiddleware);

routes.get('/check-token', (req, res) => res.json({ ok: true }));

// User

routes.put('/update-user-data', userController.update);
routes.get('/show-user/:id', userController.show);

routes.put('/update-avatar', upload.single('image'), avatarController.store);

// Search user

routes.get('/search/:search', searchController.store);

// Friend Request

routes.post('/friend-request/:id', friendRequestController.store);
routes.get('/list-friend-request', friendRequestController.index);
routes.put('/response-request/:id/:response', friendRequestController.update);

// Friends

routes.get('/friend-list', friendController.index);

// Post

routes.post('/create-post', upload.single('image'), postController.store);
routes.get('/list-posts/:id*?', postController.show);
routes.get('/posts', postController.index);

export default routes;
