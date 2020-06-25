import { Request, Response } from 'express';

import knex from '../database/connections';

class AvatarController {
  async store(req: Request, res: Response) {
    const { userId } = req;

    const { filename } = req.file;

    await knex('users').where('id', userId).update({ avatar: filename });

    const user = await knex('users').where('id', userId).first();

    const { name, bio, birthday, location, work_place } = user;

    const serializedUser = {
      id: userId,
      birthday,
      location,
      work_place,
      name,
      bio,
      avatar_url: `http://192.168.100.6:3333/uploads/${user.avatar}`,
    };

    return res.json(serializedUser);
  }
}

export default AvatarController;
