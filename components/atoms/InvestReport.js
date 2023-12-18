'use client'

function InvestReport ({ relatorio }) {
  return (
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
      <h2 className="text-lg font-semibold mb-2">Relatório Gerado</h2>
      {/* Exiba as informações do relatório aqui */}
      {relatorio && (
        <div>
          <p>{`Nome da Criptomoeda: ${relatorio.nomeCripto}`}</p>
          {/* Adicione mais informações conforme necessário */}
        </div>
      )}
    </div>
  )
}

export default InvestReport
