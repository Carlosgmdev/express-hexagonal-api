import { Router } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";


const router: Router = Router();
router.use('/auth', authRoutes);
router.use('/users', userRoutes);


export default router;