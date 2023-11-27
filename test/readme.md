# Testes de software

Os testes são escritos usando o frameworks de testes **Mocha** e **Chai**, focados na verificação de diferentes aspectos do sistema. São testes unitários que verificam o comportamento de cada componente do sistema, garantindo que o mesmo se comporte conforme o esperado. 

# Executando os testes

Para executar os testes, é necessário que o sistema esteja rodando localmente e o banco de dados esteja conectado. Siga os passos abaixo:

1. Certifique-se de que o sistema está rodando **localmente**, na porta **3001**.
2. Garanta a conexão com o banco de dados.
3. Abra um terminal (ex: CMD, Terminal, etc.).
3. Digite o comando npm test na raiz do projeto.

```
npm test
```

# Como escrever novos testes

Ao escrever novos testes, é importante seguir diretrizes para garantir a eficácia dos mesmos, utilizando das bibliotecas Mocha e Chai. Seguem abaixo algumas diretrizes:

1. Nomenclatura clara: Nomear os testes de forma clara e descritiva, indicando o que está sendo testado.
2. Compreensão do comportamento: Proporcionar o comportamento esperado do sistema após a execução do teste.
3. Isolamento de testes: Garantir que teste unitários seja independente e não dependa do estado ou resultado de outros testes.
4. Cobertura abrangente: Buscar cobrir o máximo possível do código, identificando áreas críticas e garantindo a confiabilidade do sistema.
5. Testes de regressão: Garantir que os testes sejam executados sempre que uma nova funcionalidade for adicionada ou alterada, evitando que erros sejam introduzidos no sistema.

# Exemplo de Teste

Exemplo de um teste unitário realizado para verificar a inicialização correta do modelo Parametro, se possui todos os atributos necessários definidos corretamente.

Teste localizado em src/models/parametro.ts.

```
import { expect } from "chai";
import { Parametro } from "../../src/models/parametro";

describe("TESTE UNITÁRIO - Inicialização do model de Parametro", () => {
    it("Deve conter todos os atributos corretamente", () => {
        expect(Parametro).to.have.property("name", "parametro");
        expect(Parametro).to.have.property("tableName", "parametro");
        expect(Parametro).to.have.property("rawAttributes").to.have.property("id_parametro");
        expect(Parametro).to.have.property("rawAttributes").to.have.property("fk_estacao");
        expect(Parametro).to.have.property("rawAttributes").to.have.property("fk_tipo_parametro");
    });
});
```