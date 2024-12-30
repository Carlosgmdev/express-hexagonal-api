import { Router } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import JoseService from "../services/jose.service";


const router: Router = Router();
router.use('/auth', authRoutes);
router.use('/users', userRoutes);


export default router;