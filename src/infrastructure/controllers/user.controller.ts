import { Request, Response } from 'express';
import { UserService } from '../../application/user/user.service';


export class UserController {


    constructor(private readonly userService: UserService) { }


    getAllUsers = async (_req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    };


    getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.userService.getUserById(req.params.id);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    };


    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id, name, email } = req.body;
            await this.userService.createUser(id, name, email);
            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    };


}