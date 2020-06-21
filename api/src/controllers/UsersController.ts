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

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const updatedUser = req.body;

      await knex('users').where('id', id).update(updatedUser);

      const user = await knex('users').where('id', id).first();

      const { name, avatar, bio, birthday, location, work_place } = user;

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

      return res.json(serializedUser);
    } catch {
      return res.status(400).json({ error: 'Error. Try again' });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await knex('users').where('id', id).first();

      const { name, avatar, bio, birthday, location, work_place } = user;

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

      return res.json(serializedUser);
    } catch {
      return res.status(400).json({ error: "Error. User can't be loaded!" });
    }
  }
}

export default ItemsController;
