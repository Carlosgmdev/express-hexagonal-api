import User from '../../domain/user/user.entity';
import { UserRepository } from '../../domain/user/user.repository';


export class UserService {


    constructor(private readonly userRepository: UserRepository) { }


    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.findAll();
    }


    async getUserById(id: string): Promise<User | null> {
        return await this.userRepository.findById(id);
    }


    async createUser(id: string, name: string, email: string): Promise<void> {
        const user = new User(id, name, email);
        await this.userRepository.save(user);
    }


}