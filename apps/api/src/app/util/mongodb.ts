import { Application } from 'express';

import { Collection, Db } from 'mongodb';

export function getCollection<T>(
  appOrDb: (Db | Application),
  name: string,
): Collection<T> {
  const db: Db = appOrDb instanceof Db
  ? appOrDb
  : appOrDb.locals.db;
  return db.collection(name);
}
