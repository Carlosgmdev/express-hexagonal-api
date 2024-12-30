import { createSecretKey, KeyObject } from "node:crypto";
import { Buffer } from "node:buffer";


const secretKey: KeyObject = createSecretKey(Buffer.from(process.env.JWT_SECRET as string));


const jwtConfig = {
    expiresIn: '1d',
    secretKey,
    issuer: 'myapp',
    audience: 'users'
}


export default jwtConfig;