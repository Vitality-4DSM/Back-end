import express from "express";
import routes from './routes';
import dotenv from "dotenv";
import db from "./config/Database.config";
const PORT = process.env.PORT || 3000;
const app = express(); // cria o servidor e coloca na variável app

dotenv.config();

app.use(express.json());
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

db.authenticate().then(()=>{ 
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
});

db.sync().then(()=>{
    console.log('db is sync');
});

app.use('/',routes);