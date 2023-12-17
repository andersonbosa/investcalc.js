// Função para calcular o lucro total em dólares
function calcularLucroTotalDolar (quantidadeCripto, lucroPorCripto) {
  return quantidadeCripto * lucroPorCripto
}

// Função para converter o lucro total em dólares para reais
function converterParaReal (lucroTotalDolar, taxaCambio) {
  return lucroTotalDolar * taxaCambio
}

// Função para calcular a porcentagem do lucro
function calcularPorcentagemLucro (lucroTotalDolar, valorInvestidoDolar) {
  return (lucroTotalDolar / valorInvestidoDolar) * 100
}

// Função para calcular o lucro em reais considerando a época do investimento
function calcularLucroRealEpoca (lucroTotalDolar, taxaCambioEpoca) {
  return lucroTotalDolar * taxaCambioEpoca
}

// Função para gerar o relatório completo
function gerarRelatorio ({
  nomeCripto,
  valorInvestidoDolar,
  precoCompraCriptoDolar,
  precoVendaCriptoDolar,
  lucroPorCriptoDolar,
  taxaCambioRealDolar,
  taxaCambioRealDolarEpoca,
}) {
  // Cálculos
  const quantidadeCripto = valorInvestidoDolar / precoCompraCriptoDolar
  const lucroTotalDolar = calcularLucroTotalDolar(quantidadeCripto, lucroPorCriptoDolar)
  const lucroTotalReal = converterParaReal(lucroTotalDolar, taxaCambioRealDolar)
  const percentualLucro = calcularPorcentagemLucro(lucroTotalDolar, valorInvestidoDolar)
  const lucroRealEpoca = calcularLucroRealEpoca(lucroTotalDolar, taxaCambioRealDolarEpoca)

  // Construção do objeto de relatório
  const relatorio = {
    nomeCripto,
    investimentoInicial: {
      valorInvestidoDolar,
      precoCompraCriptoDolar,
    },
    venda: {
      precoVendaCriptoDolar,
      lucroPorCriptoDolar,
      lucroTotalDolar,
    },
    conversaoParaReal: {
      taxaCambioRealDolar,
      lucroTotalReal,
    },
    porcentagemDoLucro: {
      percentualLucro,
    },
    resultados: {
      lucroTotalEstimadoDolar: lucroTotalDolar,
      lucroTotalEstimadoReal: lucroTotalReal,
    },
    conclusao: {
      percentualLucro,
      lucroRealEpoca,
    },
  }

  return relatorio
}

// // Exemplo de uso da função gerarRelatorio para Dogecoin
// const variaveisDogecoin = {
//   nomeCripto: 'Dogecoin',
//   valorInvestidoDolar: 100,
//   precoCompraCriptoDolar: 0.06,
//   precoVendaCriptoDolar: 0.5,
//   lucroPorCriptoDolar: 0.44,
//   taxaCambioRealDolar: 4.9,
//   taxaCambioRealDolarEpoca: 3.0,
// };

// const relatorioDogecoin = gerarRelatorio(variaveisDogecoin);
// console.log(relatorioDogecoin);

// // Exemplo de uso da função gerarRelatorio para outra criptomoeda (substitua pelos valores desejados)
// const variaveisOutraCripto = {
//   nomeCripto: 'OutraCripto',
//   valorInvestidoDolar: 150,
//   precoCompraCriptoDolar: 0.08,
//   precoVendaCriptoDolar: 0.6,
//   lucroPorCriptoDolar: 0.52,
//   taxaCambioRealDolar: 5.2,
//   taxaCambioRealDolarEpoca: 2.8,
// };

// const relatorioOutraCripto = gerarRelatorio(variaveisOutraCripto);
// console.log(relatorioOutraCripto);

export default gerarRelatorio

export {
  gerarRelatorio
}