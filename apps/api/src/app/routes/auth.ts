import {
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';

import {
  AuthResult,
  User,
} from '@posts/common';

import { getCollection } from '../util/mongodb';
import { checkString, sanitizeUser } from '../util/sanitization';
import { createToken } from '../util/jwt';

export const authRouter = Router();

authRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  let body: Pick<User, 'login' | 'password'>;

  try {
    body = {
      login: checkString(req.body.login),
      password: checkString(req.body.password),
    };
  } catch(err) {
    next(err);
  }

  const user = await getCollection<User>(
    req.app,
    'users',
  ).findOne(body);

  if (user) {
    res.json({
      jwt: createToken(user),
      user: sanitizeUser(user),
    } as AuthResult);
  } else {
    res.status(401);
    next(new Error('Login ou senha errados'));
  }

});
