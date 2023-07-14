import { Model } from 'mongoose';

export type IUser = {
  id: string;
  userName: string;
  email: string;
  password: string;
};

export type UserModel = Model<IUser, object>;
