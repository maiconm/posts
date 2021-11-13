import * as express from 'express';
import * as cors from 'cors';

import { MongoClient } from 'mongodb';
import { postsRouter } from './app/routes/posts';
import { json } from 'body-parser';
import { authRouter } from './app/routes/auth';

MongoClient.connect(
  'mongodb://angular-aula03_devcontainer_db_1:27017',
).then((client: MongoClient) => {
  app.locals.db = client.db('post');
  console.log('Conectado ao MongoDB.');
}).catch((error) => {
  console.error(error);
});

const app = express();

app.use(cors());

app.use(json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/auth', authRouter);

app.use('/api/posts', postsRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
