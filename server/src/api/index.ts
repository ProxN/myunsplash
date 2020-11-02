import { Router } from 'express';
import userRoutes from './user/user.routes';
import galleryRoutes from './gallery/gallery.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/gallery', galleryRoutes);

export default router;
