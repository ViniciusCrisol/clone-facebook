import { Request, Response } from 'express';

import knex from '../database/connections';

class FriendController {
  async index(req: Request, res: Response) {
    const { userId } = req;

    const friendList = await knex('friends').where('user', userId);

    const serializedFriendList = friendList.map((friend) => friend.friend);

    return res.json(serializedFriendList);
  }
}

export default FriendController;
