import User from '../../domain/user/user.entity';
import { UserRepository } from '../../domain/user/user.repository';


export class InMemoryUserRepository implements UserRepository {


    private users: User[] = [];


    async findAll(): Promise<User[]> {
        return [...this.users];
    }


    async findById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }


    async save(user: User): Promise<void> {
        const existingUserIndex = this.users.findIndex(u => u.id === user.id);
        if (existingUserIndex >= 0) {
            this.users[existingUserIndex] = user;
        } else {
            this.users.push(user);
        }
    }


}