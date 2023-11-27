const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:TZfuObZEL9K2OXaz@vitality-gaia.joxmt67.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function sincronizar() {
  // acessando o banco não relacional e a coleção armazenamento
  await client.connect();
  const db = client.db('banco_nao_relacional');
  const Banco_mongo = db.collection('armazenamento');

  // lista formada por um get da coleção armazenamento, com o parametro de apenas vir o que tiver o campo convertido = false
  const lista = await Banco_mongo.find({ convertido: true }).toArray();

  var ids_estacao = [];
  var ids_tipo_parametro = [];
  var ids_parametro = [];
  var valores = [];
  for (let i = 0; i < lista.length; i++) {
    let json_do_banco_nao_relacional = lista[i];
    let json_estacao = json_do_banco_nao_relacional.json;

    const response = await fetch('http://localhost:3001/station/', { headers: { 'x-api-key': '4554545sdsdsd5454' } });
    const data = await response.json();
    ids_estacao = []
    await processarEstacao(data, json_estacao, ids_estacao);

    // Descobrindo id do tipo de parametro

    const responseTipoDeParametros = await fetch('http://localhost:3001/typeparameter/', { headers: { 'x-api-key': '4554545sdsdsd5454' } });
    const dataTipoDeParametros = await responseTipoDeParametros.json();

    ids_tipo_parametro = []
    await processarTipoParametros(dataTipoDeParametros, json_estacao, ids_tipo_parametro);

    // Descobrindo id do parametro

    const responseParametros = await fetch('http://localhost:3001/parameter/', { headers: { 'x-api-key': '4554545sdsdsd5454' } });
    const dataParametros = await responseParametros.json();

    var ids_parametro = [];
    await processarParametros(dataParametros, json_estacao, ids_estacao, ids_tipo_parametro, ids_parametro, valores);

    //await Banco_mongo.deleteOne({ _id: json_do_banco_nao_relacional._id });

    // consoles log para poder verificar informações trazidas durante o processo, clique na seta para expandir ou recolher
    // console.log("json do banco não relacional:")
    // console.log(json_estacao);
    // console.log("-----------------------------------")
    // console.log("id da estação:");
    // console.log(ids_estacao);
    // console.log("-----------------------------------")
    // console.log("ids do tipo de parametro:");
    // console.log(ids_tipo_parametro)
    // console.log("-----------------------------------")
    // console.log("ids do parametro:");
    // console.log(ids_parametro);
    // console.log("-----------------------------------")
    // console.log("valores:");
    // console.log(valores);
    // console.log("-----------------------------------")
    // console.log("alertas:");
    // console.log(dataAlerta);
    // console.log("-----------------------------------")
    // console.log("")
  }

  const responseAlerta = await fetch('http://localhost:3001/alert/', { headers: { 'x-api-key': '4554545sdsdsd5454' } });
  const dataAlerta = await responseAlerta.json();

  var alertasEncontrados = [];

  // função que verifica se algum alerta teve o parametro atingido, e se sim post no historico de alarmes
  function alerta(valores, dataAlerta) {
    valores.forEach(valor => {
      dataAlerta.forEach(alerta => {

        // pega o tipo de alerta que pode ser "==", ">" ou "<" e então usa o if do tipo, e se o valor passar no parametro, é removido da lista valores para uma lista de alerta, onde é feito o post a parte para pegar o id do valor postado, e juntar no json postando no historico de alertas.
        if (valor.fk_parametro === alerta.fk_parametro) {
          let tipo = alerta.TipoDeAlerta;

          if (tipo === "==") {
            if (valor.valor == alerta.valor) {
              alertasEncontrados.push(valor);


              const index = valores.indexOf(valor);
              if (index !== -1) {
                valores.splice(index, 1);
              }


              valores.forEach(valorObj => {
                fetch('http://localhost:3001/valor/', {
                  method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': '4554545sdsdsd5454' },
                  body: JSON.stringify(valorObj)
                }).then(response => response.json()).then(data => {
                  console.log(data);
                }).catch(error => {
                  console.error(error);

                });
              });

              alertasEncontrados.forEach(valorObj => {
                fetch('http://localhost:3001/valor/', {
                  method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': '4554545sdsdsd5454' },
                  body: JSON.stringify(valorObj)
                }).then(response => response.json()).then(data => {

                  json_historico = {
                    fk_alerta: alerta.id_alerta,
                    fk_valor: data.id_valor,
                    data: new Date(),
                  }

                  fetch('http://localhost:3001/historicalert/', {
                    method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': '4554545sdsdsd5454' },
                    body: JSON.stringify(json_historico)
                  }).then(response => response.json()).then(data => {
                    console.log(data);
                  })

                }).catch(error => {
                  console.error(error);
                });
              });

            }
          }

          if (tipo === ">") {
            if (valor.valor > alerta.valor) {
              alertasEncontrados.push(valor);


              const index = valores.indexOf(valor);
              if (index !== -1) {
                valores.splice(index, 1);
              }


              valores.forEach(valorObj => {
                fetch('http://localhost:3001/valor/', {
                  method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': '4554545sdsdsd5454' },
                  body: JSON.stringify(valorObj)
                }).then(response => response.json()).then(data => {
                  console.log(data);
                }).catch(error => {
                  console.error(error);

                });
              });

              alertasEncontrados.forEach(valorObj => {
                fetch('http://localhost:3001/valor/', {
                  method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': '4554545sdsdsd5454' },
                  body: JSON.stringify(valorObj)
                }).then(response => response.json()).then(data => {

                  json_historico = {
                    fk_alerta: alerta.id_alerta,
                    fk_valor: data.id_valor,
                    data: new Date(),
                  }

                  fetch('http://localhost:3001/historicalert/', {
                    method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': '4554545sdsdsd5454' },
                    body: JSON.stringify(json_historico)
                  }).then(response => response.json()).then(data => {
                    console.log(data);
                  })

                }).catch(error => {
                  console.error(error);
                });
              });
            }
          }

          if (tipo === "<") {
            if (valor.valor < alerta.valor) {
              alertasEncontrados.push(valor);


              const index = valores.indexOf(valor);
              if (index !== -1) {
                valores.splice(index, 1);
              }


              valores.forEach(valorObj => {
                fetch('http://localhost:3001/valor/', {
                  method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': '4554545sdsdsd5454' },
                  body: JSON.stringify(valorObj)
                }).then(response => response.json()).then(data => {
                  console.log(data);
                }).catch(error => {
                  console.error(error);

                });
              });

              alertasEncontrados.forEach(valorObj => {
                fetch('http://localhost:3001/valor/', {
                  method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': '4554545sdsdsd5454' },
                  body: JSON.stringify(valorObj)
                }).then(response => response.json()).then(data => {

                  json_historico = {
                    fk_alerta: alerta.id_alerta,
                    fk_valor: data.id_valor,
                    data: new Date(),
                  }

                  fetch('http://localhost:3001/historicalert/', {
                    method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': '4554545sdsdsd5454' },
                    body: JSON.stringify(json_historico)
                  }).then(response => response.json()).then(data => {
                    console.log(data);
                  })

                }).catch(error => {
                  console.error(error);
                });
              });
            }
          }
        }
      });
    });
  }

  alerta(valores, dataAlerta);

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
}

sincronizar()
