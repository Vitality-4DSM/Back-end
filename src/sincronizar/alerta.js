function alerta(valores, dataAlerta) {
    valores.forEach(valor => {
        dataAlerta.forEach(alerta => {

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
                    }
                }

                if (tipo === "<") {
                    if (valor.valor < alerta.valor) {
                        alertasEncontrados.push(valor);


                        const index = valores.indexOf(valor);
                        if (index !== -1) {
                            valores.splice(index, 1);
                        }

                    }
                }

            }
        });
    });
}

alerta()