import LoginDto from "../../application/auth/dtos/login.dto";

export default interface AuthRepository {
    login(login: LoginDto): Promise<void>;
}