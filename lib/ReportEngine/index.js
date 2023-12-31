// // Função para calcular o lucro total em dólares
// function calcularLucroTotalDolar (quantidadeCripto, lucroPorCripto) {
//   return quantidadeCripto * lucroPorCripto
// }

// // Função para converter o lucro total em dólares para reais
// function converterParaReal (lucroTotalDolar, taxaCambio) {
//   return lucroTotalDolar * taxaCambio
// }

// // Função para calcular a porcentagem do lucro
// function calcularPorcentagemLucro (lucroTotalDolar, valorInvestidoDolar) {
//   return (lucroTotalDolar / valorInvestidoDolar) * 100
// }

// // Função para calcular o lucro em reais considerando a época do investimento
// function calcularLucroRealEpoca (lucroTotalDolar, taxaCambioEpoca) {
//   return lucroTotalDolar * taxaCambioEpoca
// }

// // Função para gerar o relatório completo
// function gerarRelatorio ({
//   nomeCripto,
//   valorInvestidoDolar,
//   precoCompraCriptoDolar,
//   precoVendaCriptoDolar,
//   lucroPorCriptoDolar,
//   taxaCambioRealDolar,
//   taxaCambioRealDolarEpoca,
// }) {
//   // Cálculos
//   const quantidadeCripto = valorInvestidoDolar / precoCompraCriptoDolar
//   const lucroTotalDolar = calcularLucroTotalDolar(quantidadeCripto, lucroPorCriptoDolar)
//   const lucroTotalReal = converterParaReal(lucroTotalDolar, taxaCambioRealDolar)
//   const percentualLucro = calcularPorcentagemLucro(lucroTotalDolar, valorInvestidoDolar)
//   const lucroRealEpoca = calcularLucroRealEpoca(lucroTotalDolar, taxaCambioRealDolarEpoca)

//   // Construção do objeto de relatório
//   const relatorio = {
//     nomeCripto,
//     investimentoInicial: {
//       valorInvestidoDolar,
//       precoCompraCriptoDolar,
//     },
//     venda: {
//       precoVendaCriptoDolar,
//       lucroPorCriptoDolar,
//       lucroTotalDolar,
//     },
//     conversaoParaReal: {
//       taxaCambioRealDolar,
//       lucroTotalReal,
//     },
//     porcentagemDoLucro: {
//       percentualLucro,
//     },
//     resultados: {
//       lucroTotalEstimadoDolar: lucroTotalDolar,
//       lucroTotalEstimadoReal: lucroTotalReal,
//     },
//     conclusao: {
//       percentualLucro,
//       lucroRealEpoca,
//     },
//   }

//   return relatorio
// }

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

class InvestReportEngine {
  constructor({
    nomeCripto,
    valorInvestidoDolar,
    precoCompraCriptoDolar,
    precoVendaCriptoDolar,
    taxaCambioRealDolar,
    taxaCambioRealDolarEpoca,
  }) {
    this.nomeCripto = nomeCripto
    this.valorInvestidoDolar = parseFloat(valorInvestidoDolar)
    this.precoCompraCriptoDolar = parseFloat(precoCompraCriptoDolar)
    this.precoVendaCriptoDolar = parseFloat(precoVendaCriptoDolar)
    this.taxaCambioRealDolar = parseFloat(taxaCambioRealDolar)
    this.taxaCambioRealDolarEpoca = parseFloat(taxaCambioRealDolarEpoca)

    this.calcularLucro() // Adicionamos a chamada do método para calcular o lucro ao criar uma instância
    this.quantidadeCripto = this.calcularQuantidadeCripto()
    this.lucroTotalDolar = this.calcularLucroTotalDolar()
    this.lucroTotalReal = this.converterParaReal()
    this.percentualLucro = this.calcularPorcentagemLucro()
    this.lucroRealEpoca = this.calcularLucroRealEpoca()
  }

  calcularLucro () {
    this.lucroPorCriptoDolar = this.precoVendaCriptoDolar - this.precoCompraCriptoDolar
  }

  calcularQuantidadeCripto () {
    return this.valorInvestidoDolar / this.precoCompraCriptoDolar
  }

  calcularLucroTotalDolar () {
    return this.quantidadeCripto * this.lucroPorCriptoDolar
  }

  converterParaReal () {
    return this.lucroTotalDolar * this.taxaCambioRealDolar
  }

  calcularPorcentagemLucro () {
    return (this.lucroTotalDolar / this.valorInvestidoDolar) * 100
  }

  calcularLucroRealEpoca () {
    return this.lucroTotalDolar * this.taxaCambioRealDolarEpoca
  }

  getGeneralReport () {
    return {
      nomeCripto: this.nomeCripto,
      investimentoInicial: {
        valorInvestidoDolar: this.valorInvestidoDolar,
        precoCompraCriptoDolar: this.precoCompraCriptoDolar,
      },
      venda: {
        precoVendaCriptoDolar: this.precoVendaCriptoDolar,
        lucroPorCriptoDolar: this.lucroPorCriptoDolar,
        lucroTotalDolar: this.lucroTotalDolar,
      },
      conversaoParaReal: {
        taxaCambioRealDolar: this.taxaCambioRealDolar,
        lucroTotalReal: this.lucroTotalReal,
      },
      porcentagemDoLucro: {
        percentualLucro: this.percentualLucro,
      },
      resultados: {
        lucroTotalEstimadoDolar: this.lucroTotalDolar,
        lucroTotalEstimadoReal: this.lucroTotalReal,
      },
      conclusao: {
        percentualLucro: this.percentualLucro,
        lucroRealEpoca: this.lucroRealEpoca,
      }
    }
  }
}

// // Exemplo de uso da classe InvestReportEngine
// const variaveisDogecoin = {
//   nomeCripto: 'Dogecoin',
//   valorInvestidoDolar: 100,
//   precoCompraCriptoDolar: 0.06,
//   precoVendaCriptoDolar: 0.5,
//   taxaCambioRealDolar: 4.9,
//   taxaCambioRealDolarEpoca: 3.0,
// }

// const relatorioDogecoin = new InvestReportEngine(variaveisDogecoin);
// console.log(relatorioDogecoin);

export default InvestReportEngine