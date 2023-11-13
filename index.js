import express from "express";

const porta = 3000;
const host = '0.0.0.0';

const app = express();

app.use(express.static('./paginas'));

app.get('/', (requisicao, resposta) => {
    resposta.end(`
        <!DOCTYPE html>
            <head>
                <meta charset="UTF-8">
                <title>Menu de Sistemas</title>
            </head>
            <body>
            <h1>MENU</h1>
            <ul>
                <li><a href = "/cadastraAluno.html">Cadastrar Aluno</a></li>
            </ul>
            </body>
        </html>
    `);
})

app.listen(porta, host, () => {
    console.log(`Servidor executando na url http://${host}:${porta}`);
});
