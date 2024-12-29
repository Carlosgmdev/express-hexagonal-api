import e, { NextFunction, Request, Response } from "express";
import HttpException from "../errors/http-exception.error";


const errorMiddleware = (error: Error, _req: Request, res: Response, _next: NextFunction): void => {
    if (error instanceof HttpException) {
        const e: HttpException = error as HttpException;
        res.status(e.statusCode).json({ message: e.message });
    } else {
        res.status(500).json({ error: 'Internal server error' });
    }
};


export default errorMiddleware;