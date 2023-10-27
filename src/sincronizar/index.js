const { exec } = require('child_process');

async function runSync() {
    while (true) {
        console.log('Iniciando a sincronização...');

        exec('node sincronizar.js', (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro: ${error.message}`);
            }
            console.log(`Sincronização concluída:\n${stdout}`);
            console.error(`Erros:\n${stderr}`);
        });

        // Aguarde 5 minutos (300.000 milissegundos) antes de iniciar a próxima sincronização
        await new Promise(resolve => setTimeout(resolve, 30000));
    }
}

runSync().catch(error => {
    console.error(`Erro inesperado: ${error}`);
});
