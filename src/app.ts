import express from 'express';
import routes from './infrastructure/routes';
import errorMiddleware from './infrastructure/middlewares/error.middleware';


export default class App {

    
    private app: express.Application;
    private port: number = 3000;


    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }


    private initializeMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(errorMiddleware);
    }


    private initializeRoutes(): void {
        this.app.use('/api', routes);
    }


    run(): void {
        this.port = Number(process.env.PORT) || this.port;
        this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`));
    }


}
