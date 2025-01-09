import { jwtVerify, SignJWT } from "jose";
import jwtConfig from "../config/jtw.config";
import HttpException from "../errors/http-exception.error";
import JwtService from "../../domain/auth/jwt-service.interface";
import { StatusCodes } from "http-status-codes";


export default class JoseService implements JwtService {


    async generateToken(userId: string): Promise<string> {
        const jwt: any = await new SignJWT({ userId })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setIssuer(jwtConfig.issuer)
            .setAudience(jwtConfig.audience)
            .setExpirationTime(jwtConfig.expiresIn)
            .sign(jwtConfig.secretKey);
        return jwt;
    }


    async verifyToken(token: string): Promise<string> {
        try {
            const { payload } = await jwtVerify(token, jwtConfig.secretKey, {
                issuer: jwtConfig.issuer,
                audience: jwtConfig.audience
            });
            if (!payload.userId || typeof payload.userId !== 'string') {
                throw new HttpException(StatusCodes.UNAUTHORIZED, 'Invalid token');
            }
            return payload.userId;
        } catch (error) {
            throw new HttpException(StatusCodes.UNAUTHORIZED, 'Invalid token');
        }
    }


}