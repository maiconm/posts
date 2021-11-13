import { User } from '@posts/common';

/**
 * Verifica se o parâmetro especificado é uma `string` de fato (retornando-a)
 * em caso positivo.
 *
 * Caso não seja uma `string`, lança uma exceção.
 *
 * @param unk Valor a se verificar se é `string`.
 */
export function checkString(unk: unknown): string {
  if (typeof unk === 'string') {
    return unk;
  }
  const str = JSON.stringify(unk, undefined, 2);
  throw new Error(`O parâmetro não é uma string: ${str}`);
}

/**
 * Sanitiza os dados do usuários especificado, removendo informações sensíveis.
 *
 * @param user Dados do usuário a serem sanitizados.
 */
export function sanitizeUser(user: User): Omit<User, 'password'> {
  const sanitizedUser: User = {
    ...user,
  };
  delete sanitizedUser.password;
  return sanitizedUser;
}
