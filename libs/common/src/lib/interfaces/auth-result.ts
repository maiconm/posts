import { User } from './user';

export interface AuthResult {
  jwt: string;
  user: Omit<User, 'password'>;
}
