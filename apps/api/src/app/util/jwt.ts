import * as jsonWebToken from 'jsonwebtoken';

import { User } from '@posts/common';

import { sanitizeUser } from './sanitization';

export const JWT_SECRET_KEY = 'Ch4v3-s3CReTa';

/**
 * Emite um novo token JWT para o usuário especificado, com duração de 10 min.
 *
 * @param user Dados do usuário para o qual o token está sendo emitido.
 */
export function createToken(user: User): string {
  return jsonWebToken.sign(
    sanitizeUser(user),
    JWT_SECRET_KEY,
    {
      expiresIn: '10m',
    },
  );
}
