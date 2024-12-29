export default class HttpException extends Error {


    constructor(public readonly statusCode: number, public readonly message: string) {
        super(message);
        this.name = this.constructor.name;
    }


}