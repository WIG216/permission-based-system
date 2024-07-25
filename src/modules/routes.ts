import { Router } from 'express';
import userRoutes from './user/userRoutes';
import profileRoutes from './profile/profileRoute';
import permissionRoutes from './permissions/permissionRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);
router.use('/permissions', permissionRoutes);

export default router;
