import { Request, NextFunction, Response } from 'express';
import * as galleryService from './gallery.service';
import catchAsync from '../../utils/catchAsync';

export const addImage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const image = await galleryService.addImage(req.body);

    res.status(200).json({
      status: 'success',
      data: image,
    });
  }
);

export const { uploadImage } = galleryService;

export const reizeImage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.file) {
      const { height, path, width, size } = await galleryService.resizeImage(
        req.file.buffer
      );
      req.body.name = req.file.originalname.split(/\.(jpg|jpeg|png|gif)$/)[0];
      req.body.url = `${req.get('host')}/${path}`;
      req.body.filePath = path;
      req.body.size = size;
      req.body.height = height;
      req.body.width = width;
    }
    next();
  }
);

export const deleteImage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await galleryService.deleteImage(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  }
);
