import { UserInfo, VerifyUserCredentialsArgs } from './types';
import { UserDataLayer } from '../../cloudflare-kv/user';
import { CreateNewUserArgs } from '../../cloudflare-kv/types';
import * as bcrypt from 'bcryptjs';
import { ErrorCode, HttpError } from '../http-error/types';
import { getHttpErrorResponse } from '../http-error/http-error-response.service';

export const verifyPassword = async ({
  bcryptedPassword,
  password,
}: {
  bcryptedPassword: string;
  password: string;
}): Promise<boolean> => {
  return bcrypt.compare(password, bcryptedPassword);
};

const getBcryptedPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(4);
  return bcrypt.hash(password, salt);
};

export const AuthService = {
  verifyUserCredentials: async ({
    email,
    password,
  }: VerifyUserCredentialsArgs): Promise<UserInfo> => {
    const user = await UserDataLayer.getUser(email);
    if (!user) throw new HttpError(getHttpErrorResponse(ErrorCode.INVALID_CREDENTIALS));
    const validPassword = await verifyPassword({
      bcryptedPassword: user.password,
      password,
    });
    if (!validPassword)
      throw new HttpError(getHttpErrorResponse(ErrorCode.INVALID_CREDENTIALS));
    const { firstName, lastName, createdAt, updatedAt, ip } = user;
    return {
      email,
      firstName,
      lastName,
      ip,
      createdAt,
      updatedAt,
    };
  },
  createNewUser: async ({
    email,
    password,
    firstName,
    lastName,
    ip,
  }: CreateNewUserArgs): Promise<void> => {
    if (await UserDataLayer.getUser(email)) {
      throw new HttpError(getHttpErrorResponse(ErrorCode.USERNAME_TAKEN));
    }
    const bcryptedPassword = await getBcryptedPassword(password);
    console.log(bcryptedPassword);
    await UserDataLayer.createNewUser({
      email,
      password: bcryptedPassword,
      firstName,
      lastName,
      ip,
    });
  },
  // generateJWT: async (email: string): Promise<string> => {
  //   return jwt.sign({ email }, JWT_SECRET(), { expiresIn: '30 days' });
  // },
  // verifyAndDecodeJWT: async (token: string): Promise<string | undefined> => {
  //   try {
  //     const result = jwt.verify(token, JWT_SECRET());
  //     return (result as { username: string }).username;
  //   } catch {}
  // },
};
