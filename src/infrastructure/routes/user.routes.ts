import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../../application/user/user.service';
import { InMemoryUserRepository } from '../repositories/in-memory-user.repository';
import { UserRepository } from '../../domain/user/user.repository';
import { authMiddleware } from '../middlewares/auth.middleware';
import JoseService from '../services/jose.service';
import JwtService from '../../domain/auth/jwt-service.interface';


const router: Router = Router();
const userRepository: UserRepository = new InMemoryUserRepository();
const userService: UserService = new UserService(userRepository);
const userController: UserController = new UserController(userService);
const jwtService: JwtService = new JoseService();

router.use(authMiddleware(jwtService));
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);


export default router;