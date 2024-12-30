import { NextFunction, Request, Response, Router } from "express";
import AuthService from "../../application/auth/auth.service";
import AuthController from "../controllers/auth.controller";
import JoseService from "../services/jose.service";
import { UserRepository } from "../../domain/user/user.repository";
import { InMemoryUserRepository } from "../repositories/in-memory-user.repository";
import JwtService from "../../domain/auth/jwt-service.interface";
import HashService from "../../domain/auth/hash-service.interface";
import BcryptService from "../services/bcrypt.service";


const router: Router = Router();
const jwtService: JwtService = new JoseService();
const hashService: HashService = new BcryptService();
const userRepository: UserRepository = new InMemoryUserRepository();
const authService: AuthService = new AuthService(jwtService, hashService, userRepository);
const authController: AuthController = new AuthController(authService);

router.post('/sign-in', (req: Request, res: Response, next: NextFunction) => authController.signIn(req, res, next));
router.post('/sign-up', (req: Request, res: Response, next: NextFunction) => authController.signUp(req, res, next));


export default router;