import { CreateNewUserArgs, User } from './types';

export const UserDataLayer = {
  createNewUser: async ({
    email,
    password,
    firstName,
    lastName,
    ip,
  }: CreateNewUserArgs) => {
    console.log('created a new user?');
  },
  getUser: async (email: string): Promise<User> => {
    return {
      email: 'hello',
      password: '123password',
      firstName: 'nam',
      lastName: 'dao',
      ip: 'localhost',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  },
  getUserPassword: async (email: string): Promise<string> => {
    return 'password';
  },
};
