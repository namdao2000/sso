export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  ip: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateNewUserArgs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  ip?: string;
}
