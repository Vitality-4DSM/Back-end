import express from "express";
import routes from './routes';
import dotenv from "dotenv";
import db from "./config/Database.config";
const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();
app.use(express.json());

db.authenticate().then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log(err);
});

db.sync().then(() => {
    console.log('Banco de dados sincronizado.');
    app.listen(PORT, () => {
        console.log(`Rodando na porta ${PORT}`);
    });
}).catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err);
});


app.use('/', routes);