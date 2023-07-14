import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

const createUser = async (payload: IUser): Promise<IUser> => {
  const id = await generateUserId();
  payload.id = id;

  const createdUser = await User.create(payload);
  if (!createUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
  }

  return createdUser;
};

export const UserService = {
  createUser,
};
