export default interface JwtService {
    generateToken(userId: string): Promise<string>;
    verifyToken(token: string): Promise<string>;
}