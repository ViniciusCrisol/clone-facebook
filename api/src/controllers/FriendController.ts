import { Request, Response } from 'express';
import knex from '../database/connections';

class FriendController {
  async store(req: Request, res: Response) {
    const { userId } = req;
    const { id: friendId } = req.params;

    if (userId === Number(friendId)) {
      return res
        .status(401)
        .json({ error: 'You cant add you in your friend list !' });
    }

    const user = await knex('users').where('id', userId).first();
    const friend = await knex('users').where('id', friendId).first();

    if (!user && !friend) {
      return res.status(400).json({ error: 'User not found !' });
    }

    await knex('friend_requests').insert({
      user: userId,
      friend: friendId,
    });

    return res.json({ ok: true });
  }

  async index(req: Request, res: Response) {
    const { userId: id } = req;

    const requests = await knex
      .select('*')
      .from('friend_requests')
      .where('friend', id);

    return res.json(requests);
  }
}

export default FriendController;
