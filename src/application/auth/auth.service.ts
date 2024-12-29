import AuthRepository from "../../domain/auth/auth.repository";

export default class AuthService {


    constructor(private readonly authRepository: AuthRepository) { }


    async login(login: any): Promise<any> {
        console.log('login', login);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ token: 'ekisde' });
            }, 1000);
        });
    }



}