import { NextFunction, Request, Response, Router } from "express";
import InMemoryAuthRepository from "../repositories/in-memory-auth.repository";
import AuthService from "../../application/auth/auth.service";
import AuthController from "../controllers/auth.controller";
import AuthRepository from "../../domain/auth/auth.repository";
import { validationMiddleware } from "../middlewares/validation.middleware";


const router: Router = Router();
const authRepository: AuthRepository = new InMemoryAuthRepository();
const authService: AuthService = new AuthService(authRepository);
const authController: AuthController = new AuthController(authService);

router.post('/', (req: Request, res: Response, next: NextFunction) => authController.login(req, res, next));


export default router;