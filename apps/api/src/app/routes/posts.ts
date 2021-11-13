import {
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';

import * as jsonWebToken from 'jsonwebtoken';

import {
  Post,
} from '@posts/common';

import { getCollection } from '../util/mongodb';
import { requireJwtToken } from '../middlewares/jwt';
import { JWT_SECRET_KEY } from '../util/jwt';

export const postsRouter = Router();

postsRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const posts = await getCollection<Post>(
    req.app,
    'posts',
  ).find().toArray();
  res.json(posts);
});

postsRouter.post('/', requireJwtToken, async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization.split(' ')[1]
  const { login } = jsonWebToken.verify(authorization, JWT_SECRET_KEY);
  const post: Post = req.body;
  post.user = login;
  post.date = Date.now();
  const { insertedId } = await getCollection<Post>(
    req.app,
    'posts'
  ).insertOne(post);
  res.json({ _id: insertedId, date: post.date });
});
