import { NextFunction, Request, Response } from "express";
import AuthService from "@application/auth/auth.service";


export default class AuthController {


    constructor(private readonly authService: AuthService) { }


    async signIn(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const login: any = req.body;
            res.status(200).json(await this.authService.signIn(login));
        } catch (error) {
            next(error);
        }
    }


    async signUp(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user: any = req.body;
        } catch (error) {
            next(error);
        }
    }


}