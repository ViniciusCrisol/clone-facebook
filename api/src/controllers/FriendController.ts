import { Request, Response } from 'express';

import knex from '../database/connections';

class FriendController {
  async index(req: Request, res: Response) {
    const { userId } = req;

    const friendList = await knex('friends').where('user', userId);

    const friendIds = friendList.map((friend) => friend.friend);

    const serializedFriendList = [];
    for (let friendId in friendIds) {
      const { id, location, name, avatar } = await knex('users')
        .where('id', friendIds[friendId])
        .first();

      serializedFriendList.push({
        id,
        name,
        avatar_url: `http://192.168.100.6:3333/uploads/${avatar}`,
        location,
      });
    }

    return res.json(serializedFriendList);
  }
}

export default FriendController;
