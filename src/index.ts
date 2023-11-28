import express from "express";
import routes from './routes';
import cors from 'cors'; // Importe o 'cors' desta forma
import dotenv from "dotenv";
import { Usuario } from "./models/usuario";
import db from "./config/bd_config";
import { sha512 } from "sha512-crypt-ts";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();
app.use(express.json());

// Configuração do CORS para permitir todas as origens (*), você pode personalizar isso conforme necessário.
app.use(cors());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
db.authenticate().then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log(err);
});

db.sync().then(async () => {
    console.log('Banco de dados sincronizado.');

    const admin = await Usuario.findOne({ where: { cargo: "admin" } });
    const user = await Usuario.findOne({ where: { cargo: "user" } });

    if (!admin) {
        // Crie o usuário admin se ele não existir
        await Usuario.create({
            "nome": "João Silva",
            "cargo": "admin",
            "email": "admin@gmail",
            "senha": sha512.crypt("123","password"),
            "cadastro": "2023-01-21T10:00:00Z",
            "status": true
        });
        console.log("Usuário admin criado com sucesso.");
    } 
    if (!user) {
        // Crie o usuário user se ele não existir
        await Usuario.create({
            "nome": "Maria Silva",
            "cargo": "user",
            "email": "user@gmail",
            "senha": sha512.crypt("123","password"),
            "cadastro": "2023-01-21T10:00:00Z" ,
            "status": true
        });
        console.log("Usuário user criado com sucesso.");
    }

    app.listen(PORT, () => {
        console.log(`Rodando na porta ${PORT}`);
    });
}).catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err);
});

app.use('/', routes);

// Certifique-se de que suas rotas estejam definidas corretamente em 'routes'.
