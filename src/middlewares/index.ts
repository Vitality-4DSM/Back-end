import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config()
// cria um token usando os dados do usuário e a chave armazenada na variável de ambiente JWT_SECRET
export const generateToken = async (usuario: any) => jwt.sign(usuario, process.env.JWT_SECRET as
    string);
// verifica se o usuário possui autorização
export const authorization = async (req: Request, res: Response, next: NextFunction) => {
    // o token precisa ser enviado pelo cliente no header da requisição
    const authorization: any = req.headers.authorization;
    try {
        // autorização no formato Bearer token
        const [, token] = authorization.split(" ");
        // valida o token
        const decoded = <any>jwt.verify(token, process.env.JWT_SECRET as string);
        if (!decoded) {
            res.status(401).json({ error: "Não autorizado" });
        }
        else {
            // passa os dados pelo res.locals para o próximo nível da middleware
            res.locals = decoded;
        }
    } catch (error) {
        // o token não é válido, a resposta com HTTP Method 401 (unauthorized)
        return res.status(401).send({ error: "Não autorizado" });
    }
    return next(); //chama a próxima função
};

export const apiKey = async (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['x-api-key'];
   if (apiKey === '4554545sdsdsd5454') {
     return next(); 
   } else {
       return res.status(401).send({ error: `Requisição sem api key ${apiKey}`});
   }
}

// requer a autorização de admin para acessar o recurso
export const authAdmin = async (_: Request, res: Response, next: NextFunction) => {
    // obtém os dados do nível anterior da middleware,
    // isso evita ter de ler novamente req.headers.authorization
    const { cargo } = res.locals;
    if (cargo !== 'admin') {
        return res.status(401).send({ error: "Sem autorização para acessar o recurso" });
    }
    return next(); //chama a próxima função
};
