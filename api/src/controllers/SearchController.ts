import { Request, Response } from 'express';

import knex from '../database/connections';

class SessionController {
  async store(req: Request, res: Response) {
    const { name } = req.body;

    const users = knex('users').where('name', name);

    return res.json(users);
  }
}

export default SessionController;
