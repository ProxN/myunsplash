import userModel, { IUser, IUserSchema } from './user.model';
import AppError from '../../utils/appError';

export const createUser = async (body: IUser): Promise<IUserSchema> => {
  if (!body.password || !body.username) {
    throw new AppError('Missing username or password!', 404);
  }

  const userExists = await userModel.findOne({ username: body.username });

  if (
    userExists &&
    (await userExists?.correctPassword(body.password, userExists.password))
  ) {
    return userExists;
  }

  const user = await userModel.create(body);

  return user;
};
