const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:TZfuObZEL9K2OXaz@vitality-gaia.joxmt67.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

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
      ids_tipo_parametro.push(item.id_tipo_parametro);
    }
  });
}

async function sincronizar(){
  await client.connect();
  const db = client.db('banco_nao_relacional');
  const Banco_mongo = db.collection('armazenamento');

  const lista = await Banco_mongo.find({convertido : false}).toArray();   

  var ids_estacao = [];
  var ids_tipo_parametro = [];
    
  for (let i = 0; i < lista.length; i++) {
    let json_do_banco_nao_relacional = lista[i];
    let json_estacao = json_do_banco_nao_relacional.json.json_estacao;
    let json_tranformado_em_objeto = JSON.parse(json_estacao);

    const response = await fetch('http://localhost:3001/station/');
    const data = await response.json();
    
    ids_estacao = []
    await processarEstacao(data, json_tranformado_em_objeto, ids_estacao);

    const responseParametros = await fetch('http://localhost:3001/typeparameter/');
    const dataParametros = await responseParametros.json();

    ids_tipo_parametro = []
    await processarTipoParametros(dataParametros, json_tranformado_em_objeto, ids_tipo_parametro);





    console.log(json_tranformado_em_objeto);
    console.log(ids_estacao);
    console.log("id da estação: " + ids_estacao);
    console.log(ids_tipo_parametro)
    console.log("ids do parametro: " + ids_tipo_parametro);
    
  }
}

sincronizar()