import { Request, Response } from 'express';
import { Usuario } from "../models/usuario";
import { generateToken } from '../middlewares';

async function login(req: Request, res: Response): Promise<Response> {
    const { email, senha } = req.body;
    const user = await Usuario.findOne({
        where: { email: email, senha: senha , status: 1}
    });
    if (user) {
        const token = await generateToken(user.toJSON());
        return res.json({ token });
    }
    return res.json({ error: "Usuário não localizado" });

} 
export default login;