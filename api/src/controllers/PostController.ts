import { Request, Response } from 'express';
import knex from '../database/connections';

class FriendRequestController {
  async store(req: Request, res: Response) {
    const { userId } = req;
    const { text } = req.body;

    try {
      await knex('posts').insert({
        user: userId,
        image: req.file.filename,
        text,
      });
    } catch {
      return res
        .status(400)
        .json({ error: 'Error, the post could not be created. Try again !' });
    }

    return res.json({ ok: true });
  }
}

export default FriendRequestController;
