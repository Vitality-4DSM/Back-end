const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:TZfuObZEL9K2OXaz@vitality-gaia.joxmt67.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// codigo transformado em função, para poder usar as variaveis id_estacao e id_tipo_parametro fora do fetch
async function processarEstacao(data, json_tranformado_em_objeto, ids_estacao) {
  let ListaChavesDoRelacional = data.map((item) => {
    return item;
  });

  ListaChavesDoRelacional.forEach(itemRelacional => {
    for (const key in json_tranformado_em_objeto) {
      if (json_tranformado_em_objeto[key] === itemRelacional.identificador) {
        ids_estacao.push(itemRelacional.id_estacao);
        break;
      }
      }
  });
}

async function processarTipoParametros(data, json_tranformado_em_objeto, ids_tipo_parametro) {
  var ListaChavesDoRelacional = data.map((item) => {
    return item;
  });

  ListaChavesDoRelacional.forEach(item => {
    if (json_tranformado_em_objeto[item.json]) {
      ids_tipo_parametro.push({
        id_tipo_parametro: item.id_tipo_parametro,
        json: item.json,
      });
    }
  });
}

async function processarParametros(data, json_tranformado_em_objeto, ids_estacao, ids_tipo_parametro, ids_parametro, valores) {
  // Loop através das estações e tipos de parâmetros para criar objetos JSON com os valores correspondentes.
  for (const Id_Estacao of ids_estacao) {
    for (const tipoParametro of ids_tipo_parametro) {
      // Filtro que verificar os parâmetros que correspondem à estação e ao tipo de parâmetro.
      const EncontrarParametros = data.filter(parametro => 
        parametro.fk_estacao === Id_Estacao && parametro.fk_tipo_parametro === tipoParametro.id_tipo_parametro
      );
      
      EncontrarParametros.forEach(parametro => {
        ids_parametro.push(parametro.id_parametro);

        // Obtenha a chave para encontrar no objeto json_tranformado_em_objeto com base no tipoParametro.json
        const chaveDinamica = tipoParametro.json;

        // Crie o objeto JSON com os valores correspondentes.
        const valorObj = {
          valor: json_tranformado_em_objeto[chaveDinamica],
          unixtime: json_tranformado_em_objeto.unixtime,
          fk_parametro: parametro.id_parametro,
        };

        // Adicionar o objeto JSON à lista de valores.
        valores.push(valorObj);
      });
    }
  }
}

async function sincronizar(){
  // acessando o banco não relacional e a coleção armazenamento
  await client.connect();
  const db = client.db('banco_nao_relacional');
  const Banco_mongo = db.collection('armazenamento');

  // lista formada por um get da coleção armazenamento, com o parametro de apenas vir o que tiver o campo convertido = false
  const lista = await Banco_mongo.find({convertido : false}).toArray();   

  var ids_estacao = [];
  var ids_tipo_parametro = [];
  var ids_parametro = [];
  var valores = [];
    
  for (let i = 0; i < lista.length; i++) {
    let json_do_banco_nao_relacional = lista[i];
    let json_estacao = json_do_banco_nao_relacional.json;
    console.log(json_estacao)
    //console.log(json_tranformado_em_objeto)
    // Descobrindo id da estação

    const response = await fetch('http://localhost:3001/station/');
    const data = await response.json();
    
    ids_estacao = []
    await processarEstacao(data, json_estacao, ids_estacao);

    // Descobrindo id do tipo de parametro

    const responseTipoDeParametros = await fetch('http://localhost:3001/typeparameter/');
    const dataTipoDeParametros = await responseTipoDeParametros.json();

    ids_tipo_parametro = []
    await processarTipoParametros(dataTipoDeParametros, json_estacao, ids_tipo_parametro);

    // Descobrindo id do parametro

    const responseParametros = await fetch('http://localhost:3001/parameter/');
    const dataParametros = await responseParametros.json();

    var ids_parametro = [];
    await processarParametros(dataParametros, json_estacao, ids_estacao, ids_tipo_parametro, ids_parametro, valores);

    await Banco_mongo.updateOne(
      { _id: json_do_banco_nao_relacional._id },
      { $set: { convertido: true } }
    );

    //consoles log para poder verificar informações trazidas durante o processo, clique na seta para expandir ou recolher
    //console.log("json do banco não relacional:")
    //console.log(json_tranformado_em_objeto);
    //console.log("-----------------------------------")
    //console.log("id da estação:");
    //console.log(ids_estacao);
    //console.log("-----------------------------------")
    //console.log("ids do tipo de parametro:");
    //console.log(ids_tipo_parametro)
    //console.log("-----------------------------------")
    //console.log("ids do parametro:");
    //console.log(ids_parametro);
    //console.log("-----------------------------------")
    //console.log("valores:");
    //console.log(valores);
    //console.log("-----------------------------------")
    //console.log("")
  }

// pega a lista de valores e faz post um por um
  valores.forEach(valorObj => {fetch('http://localhost:3001/valor/', {method: 'POST', headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(valorObj)
    }).then(response => response.json()).then(data => {
      console.log(data);

    }).catch(error => {
      console.error(error);

    });
  });
}

sincronizar()