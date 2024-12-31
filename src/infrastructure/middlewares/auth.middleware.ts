import { NextFunction, Request, Response } from "express";
import JwtService from "../../domain/auth/jwt-service.interface";
import { StatusCodes } from "http-status-codes";


export const authMiddleware = (jwtService: JwtService) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const authHeader: string = req.headers.authorization as string;
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                res.status(StatusCodes.UNAUTHORIZED).send('No token provided.');
                return;
            }
            const token: string = authHeader.split(' ')[1];
            const userId: string = await jwtService.verifyToken(token);
            req.userId = userId;
            next();
        } catch (error) {
            res.status(StatusCodes.UNAUTHORIZED).send('Invalid token');
        }
    } 
}

