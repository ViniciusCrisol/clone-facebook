import { Request, Response } from 'express';
import knex from '../database/connections';

class FriendRequestController {
  async store(req: Request, res: Response) {
    const { userId } = req;
    const { id: friendId } = req.params;

    const checkFriendshipExists = await knex('friends')
      .where('user', userId)
      .andWhere('friend', friendId)
      .first();

    if (checkFriendshipExists) {
      return res.status(401).json({ error: 'Friendship already exists !' });
    }

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

    const notification = await knex('friend_requests')
      .where('user', userId)
      .andWhere('friend', friendId)
      .first();

    if (notification) {
      return res.json({ ok: true });
    }

    await knex('friend_requests').insert({
      user: userId,
      name: user.name,
      friend: friendId,
    });

    return res.json({ ok: true });
  }

  async index(req: Request, res: Response) {
    const { userId } = req;

    const requests = await knex
      .select('*')
      .from('friend_requests')
      .where('friend', userId);

    const notifications = requests.map((notification) => {
      return {
        id: notification.id,
        message: `${notification.name} sent you a friend request.`,
      };
    });

    return res.json(notifications);
  }

  async update(req: Request, res: Response) {
    const { userId } = req;
    const { id, response } = req.params;

    if (response === 'accepted') {
      const { user: friendId } = await knex('friend_requests')
        .where('id', id)
        .first();
      await knex('friends').insert({
        user: userId,
        friend: friendId,
      });
      await knex('friends').insert({
        user: friendId,
        friend: userId,
      });
      await knex('friend_requests').where('id', id).del();
      return res.json({ ok: true });
    } else {
      await knex('friend_requests').where('id', id).del();
    }
  }
}

export default FriendRequestController;
