import userModel, { IUser, IUserSchema } from './user.model';
import AppError from '../../utils/appError';

export const createUser = async (body: IUser): Promise<IUserSchema> => {
  if (!body.password || !body.username) {
    throw new AppError('Missing username or password!', 404);
  }

  const user = await userModel.create(body);

  return user;
};
