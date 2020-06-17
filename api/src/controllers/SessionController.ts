import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';

import knex from '../database/connections';
import authConfig from '../config/auth';

class SessionController {
  async store(req: Request, res: Response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const user = await knex('users').where('email', email).first();

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const checkPassword = await bcrypt.compare(password, user.password_hash);

    if (!checkPassword) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, avatar, bio, birthday, location, work_place } = user;

    const serializedUser = {
      id,
      birthday,
      location,
      work_place,
      name,
      avatar,
      bio,
      avatar_url: `http://192.168.100.6:3333/uploads/${user.avatar}`,
    };

    const token = jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return res.json({ user: serializedUser, token });
  }
}

export default SessionController;
