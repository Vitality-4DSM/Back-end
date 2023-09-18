import { Request, Response } from 'express';
import { generateToken } from '../middlewares';
import users from '../config/mock';

async function login(req: Request, res: Response): Promise<Response> {
    const { mail } = req.body;
    //verifica se o e-mail existe
    for (let i = 0; i < users.length; i++) {
        if (users[i].mail === mail) {
            const token = await generateToken(users[i]);
            return res.json({ token });
        }
    }
    return res.json({ error: "Usuário não localizado" });
}
export default login;