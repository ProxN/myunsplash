import { Router } from 'express';
import {
  addImage,
  deleteImage,
  checkUser,
  getImages,
} from './gallery.controller';

const router = Router();

router.route('/').post(addImage);
router.route('/images/:userId').get(getImages);

router.route('/:id').post(checkUser, deleteImage);

export default router;
