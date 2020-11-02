import { Request } from 'express';
import sharp, { OutputInfo } from 'sharp';
import multer from 'multer';
import galleryModel, { IGallery, IGallerySchema } from './gallery.model';
import userModel from '../user/user.model';
import AppError from '../../utils/appError';

interface resizeOutOut extends OutputInfo {
  path: string;
}

export const addImage = async (
  galleryBody: IGallery
): Promise<IGallerySchema> => {
  const userExists = await userModel.exists(galleryBody.user);
  if (!userExists) {
    throw new AppError(
      `User with id ${galleryBody.user} does not exists.`,
      404
    );
  }
  const gallery = await galleryModel.create(galleryBody);

  return gallery;
};
const multerStorage = multer.memoryStorage();

const multerFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else cb(new Error('Not an image! Please upload only images.'), false);
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadImage = upload.single('image');

export const resizeImage = async (buffer: Buffer): Promise<resizeOutOut> => {
  const path = `uploads/image-${Date.now()}.jpeg`;
  const imgInfo = await sharp(buffer)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/${path}`);

  return { ...imgInfo, path };
};

export const deleteImage = async (galleryId: string): Promise<void> => {
  await galleryModel.findByIdAndDelete(galleryId);
};
