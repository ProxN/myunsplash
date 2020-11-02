import { Request, Response, NextFunction } from 'express';
import * as userService from './user.service';
import catchAsync from '../../utils/catchAsync';

export const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.createUser(req.body);

    res.status(200).json({
      status: 'success',
      data: user,
    });
  }
);
