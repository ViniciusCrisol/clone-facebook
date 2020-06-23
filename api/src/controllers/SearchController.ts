import { Request, Response } from 'express';

import knex from '../database/connections';

class SessionController {
  async store(req: Request, res: Response) {
    const { search } = req.params;
    const { page, id } = req.headers;

    const currentPage = page ? page : 1;

    const offset = (<number>currentPage - 1) * 27;

    const users = await knex
      .select('*')
      .from('users')
      .where('name', 'like', `%${search}%`)
      .andWhere('id', '<>', `${id}`)
      .offset(offset)
      .limit(27);

    const serializedUsers = users.map((user) => {
      const userData = {
        id: user.id,
        name: user.name,
        avatar_url: `http://192.168.100.6:3333/uploads/${user.avatar}`,
        location: user.location,
      };

      return userData;
    });

    return res.json(serializedUsers);
  }
}

export default SessionController;
