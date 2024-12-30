import HashService from "../../domain/auth/hash-service.interface";
import JwtService from "../../domain/auth/jwt-service.interface";
import { UserRepository } from "../../domain/user/user.repository";

export default class AuthService {


    constructor(
        private jwtService: JwtService,
        private hashService: HashService,
        private userRepository: UserRepository
    ) { }


    async signIn(login: any): Promise<any> {
        return await this.jwtService.generateToken('5')
    }



}