import { Request, Response } from 'express';
import knex from '../database/connections';

class FriendRequestController {
  async store(req: Request, res: Response) {
    const { userId } = req;
    const { text } = req.body;

    try {
      await knex('posts').insert({
        user: userId,
        image: req.file && req.file.filename,
        text: text,
      });

      return res.json({ ok: true });
    } catch {
      return res
        .status(400)
        .json({ error: 'Error, the post could not be created!' });
    }
  }

  async show(req: Request, res: Response) {
    const { userId } = req;
    const { id: searchedUser } = req.params;

    try {
      const response = await knex('posts')
        .where('user', searchedUser ? searchedUser : userId)
        .orderBy('id', 'desc');

      const serializedPosts = [];

      for (let post in response) {
        const postData = response[post];
        const user = await knex('users').where('id', postData.user).first();

        serializedPosts.push({
          id: postData.id,
          image:
            postData.image &&
            `http://192.168.100.6:3333/uploads/${postData.image}`,
          text: postData.text && postData.text,
          created_at: postData.created_at.split(' ')[0].replace(/-/gi, '/'),

          user_id: user.id,
          name: user.name,
          avatar_url: `http://192.168.100.6:3333/uploads/${user.avatar}`,
        });
      }

      return res.json(serializedPosts);
    } catch {
      return res
        .status(400)
        .json({ error: "Error, we couldn't load your posts !" });
    }
  }

  async index(req: Request, res: Response) {
    const { userId } = req;

    try {
      const friendList = await knex('friends').where('user', userId);

      const friendIds = friendList.map((friend) => friend.friend);
      friendIds.push(userId);

      const response = await knex('posts')
        .whereIn('user', friendIds)
        .orderBy('id', 'desc');

      const serializedPosts = [];

      for (let post in response) {
        const postData = response[post];
        const user = await knex('users').where('id', postData.user).first();

        serializedPosts.push({
          id: postData.id,
          image:
            postData.image &&
            `http://192.168.100.6:3333/uploads/${postData.image}`,
          text: postData.text && postData.text,
          created_at: postData.created_at.split(' ')[0].replace(/-/gi, '/'),

          user_id: user.id,
          name: user.name,
          avatar_url: `http://192.168.100.6:3333/uploads/${user.avatar}`,
        });
      }

      return res.json(serializedPosts);
    } catch {
      return res
        .status(400)
        .json({ error: "Error, we couldn't load your posts !" });
    }
  }
}

export default FriendRequestController;
