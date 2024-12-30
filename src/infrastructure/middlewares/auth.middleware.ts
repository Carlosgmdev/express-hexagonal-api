import { NextFunction, Request, Response, Router } from "express";
import JwtService from "../../domain/auth/jwt-service.interface";


export const authMiddleware = (jwtService: JwtService) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const authHeader: string = req.headers.authorization as string;
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).send('No token provided');
            }
            const token: string = authHeader.split(' ')[1];
            const userId: string = await jwtService.verifyToken(token);
            req.userId = userId;
            next();
        } catch (error) {
            next(error);
        }
    } 
}
