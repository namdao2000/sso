export interface VerifyUserCredentialsArgs {
  email: string;
  password: string;
}

export interface UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  ip: string;
  createdAt: Date;
  updatedAt: Date;
}
