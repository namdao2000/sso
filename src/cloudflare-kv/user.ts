import { CreateNewUserArgs, User } from './types';

export const UserDataLayer = {
  createNewUser: async ({
    email,
    password,
    firstName,
    lastName,
    ip,
  }: CreateNewUserArgs) => {
    await USER.put(email, JSON.stringify({ email, password, firstName, lastName, ip }));
  },
  getUser: async (email: string): Promise<User | undefined> => {
    const result = await USER.get(email);
    if (!result) return;
    return JSON.parse(result) as User;
  },
};
