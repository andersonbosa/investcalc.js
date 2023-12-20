'use client'

import html2pdf from 'html2pdf.js'

function InvestReport ({ report }) {

  // const handleDownloadPDF = () => {
  //   const content = document.getElementById('investReportContent')
  //   if (!content) return

  //   const pdfOptions = { margin: 10, filename: 'invest_report.pdf', image: { type: 'jpeg', quality: 0.98 } }

  //   html2pdf(content, pdfOptions)
  // }

  return (
    <div className="bg-white p-4">
      {report && (
        <>
          <section id='investReportContent'>
            <hr />
            <br />

            <h2 className="text-lg font-semibold mb-2">Relatório</h2>

            {/* Seção - Investimento Inicial */}

            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">1. Investimento Inicial</h3>
              <li>Moeda: {report.nomeCripto}</li>
              <li>{`Valor Investido: $ ${report.investimentoInicial.valorInvestidoDolar}`}</li>
              <li>{`Preço de Compra por Criptomoeda: $ ${report.investimentoInicial.precoCompraCriptoDolar}`}</li>
            </div>

            {/* Seção - Venda */}
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">2. Venda</h3>
              <li>{`Preço de Venda por Criptomoeda: $ ${report.venda.precoVendaCriptoDolar}`}</li>
              <li>{`Lucro por Criptomoeda: $ ${report.venda.lucroPorCriptoDolar}`}</li>
              <li>{`Lucro Total em Dólares: $ ${report.venda.lucroTotalDolar}`}</li>
            </div>

            {/* Seção - Conversão para Real */}
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">3. Conversão para Real</h3>
              <li>{`Taxa de Câmbio Real para Dólar: ${report.conversaoParaReal.taxaCambioRealDolar}`}</li>
              <li>{`Lucro Total em Reais: R$ ${report.conversaoParaReal.lucroTotalReal.toFixed(2)}`}</li>
            </div>

            {/* Seção - Porcentagem do Lucro */}
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">4. Porcentagem do Lucro</h3>
              <li>{`Percentual de Lucro: ${report.porcentagemDoLucro.percentualLucro.toFixed(2)}%`}</li>
            </div>

            {/* Seção - Resultados */}
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">5. Resultados</h3>
              <li>{`Lucro Total Estimado em Dólares: $ ${report.resultados.lucroTotalEstimadoDolar.toFixed(2)}`}</li>
              <li>{`Lucro Total Estimado em Reais: R$ ${report.resultados.lucroTotalEstimadoReal.toFixed(2)}`}</li>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-2">6. Conclusão</h3>
              <li>{`Percentual de Lucro: ${report.conclusao.percentualLucro.toFixed(2)}%`}</li>
              <li>{`Lucro Real na Época do Investimento: R$ ${report.conclusao.lucroRealEpoca.toFixed(2)}`}</li>
              <br />
              <hr />
              <br />

            </div>
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">Resumo</h3>
              <p className='text-justify'>
                Com base nas condições fornecidas, seu investimento inicial de <code>{' '}${report.investimentoInicial.valorInvestidoDolar}{' '}</code>
                em <code>{' '}{report.nomeCripto}{' '}</code> poderia resultar em um lucro total estimado de aproximadamente
                <code>{' '}R${report.resultados.lucroTotalEstimadoReal.toFixed(2)}{' '}</code> em reais, representando um percentual de lucro de
                <code>{' '}{report.porcentagemDoLucro.percentualLucro.toFixed(2)}</code>%.
                Considerando a taxa de câmbio mais favorável na época do investimento, o lucro em reais seria de <code>{' '}R${report.conclusao.lucroRealEpoca.toFixed(2)}</code>.
              </p>
              <br />
            </div>
          </section>


          <div>
            {/* <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
              onClick={handleDownloadPDF}
            >
              Baixar Relatório em PDF
            </button> */}
          </div>
        </>
      )}
    </div>
  )
}

export default InvestReport
