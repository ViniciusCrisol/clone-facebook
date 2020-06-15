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
      gender: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email, password, gender } = req.body;

    const userExists = await knex('users').where('email', email).first();

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const password_hash = await bcrypt.hash(password, 8);

    const avatar = !req.file ? '_default.png' : req.file.filename;

    const user = {
      name,
      email,
      password_hash,
      gender,
      avatar,
    };

    await knex('users').insert(user);

    const serializedUser = {
      ...user,
      avatar_url: `http://192.168.100.6:3333/uploads/${user.avatar}`,
    };

    return res.json(serializedUser);
  }
}

export default ItemsController;
