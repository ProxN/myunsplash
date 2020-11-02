import { Router } from 'express';
import {
  uploadImage,
  addImage,
  reizeImage,
  deleteImage,
} from './gallery.controller';

const router = Router();

router.route('/').post(uploadImage, reizeImage, addImage);

router.route('/:id').delete(deleteImage);

export default router;
