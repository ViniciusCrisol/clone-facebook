import { Request, Response } from 'express';
import * as Yup from 'yup';
import knex from '../database/connections';
import bcrypt from 'bcryptjs';

class ItemsController {
  async store(req: Request, res: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email, password } = req.body;

    const userExists = await knex('users').where('email', email).first();

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const password_hash = await bcrypt.hash(password, 8);

    const avatar = '_default.png';
    const bio = 'Hey there! I am using Facebeook';

    const user = {
      name,
      email,
      password_hash,
      avatar,
      bio,
    };

    await knex('users').insert(user);

    return res.json({ ok: true });
  }
}

export default ItemsController;
