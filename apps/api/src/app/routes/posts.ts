import {
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';

import {
  Post,
} from '@posts/common';

import { getCollection } from '../util/mongodb';

export const postsRouter = Router();

postsRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const posts = await getCollection<Post>(
    req.app,
    'posts',
  ).find().toArray();
  res.json(posts);
});
