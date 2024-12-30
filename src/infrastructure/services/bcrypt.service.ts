import HashService from "../../domain/auth/hash-service.interface";
import bcrypt from 'bcrypt';


export default class BcryptService implements HashService {


    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }


    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }


}