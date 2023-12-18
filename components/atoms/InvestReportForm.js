'use client'

import gerarRelatorio from '@/lib/ReportEngine'
import { useState } from 'react'

function InvestReportForm ({ onRelatorioGerado }) {
  const [dados, setDados] = useState({
    nomeCripto: '',
    valorInvestidoDolar: '',
    precoCompraCriptoDolar: '',
    precoVendaCriptoDolar: '',
    taxaCambioRealDolar: '',
    taxaCambioRealDolarEpoca: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setDados((prevDados) => ({
      ...prevDados,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Converte strings para números
    const dadosNumeros = Object.fromEntries(Object.entries(dados).map(([key, value]) => [key, parseFloat(value)]))

    // Chama a função gerarRelatorio com os dados fornecidos
    const relatorio = gerarRelatorio(dadosNumeros)
    onRelatorioGerado(relatorio)
  }

  return (
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4">Relatório de Investimento</h1>

      <form onSubmit={handleSubmit}>
        {/* Seção - Dados da Criptomoeda */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Dados da Criptomoeda</h2>
          <div className="mb-4">
            <label htmlFor="nomeCripto">Nome da Criptomoeda</label>
            <input
              type="text"
              id="nomeCripto"
              name="nomeCripto"
              value={dados.nomeCripto}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Seção - Dados do Investimento */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Dados do Investimento</h2>

          <div className="mb-4">
            <label htmlFor="valorInvestidoDolar">Valor Investido (em dólares)</label>
            <input
              type="number"
              id="valorInvestidoDolar"
              name="valorInvestidoDolar"
              value={dados.valorInvestidoDolar}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="precoCompraCriptoDolar">Preço de Compra da Criptomoeda (em dólares)</label>
            <input
              type="number"
              id="precoCompraCriptoDolar"
              name="precoCompraCriptoDolar"
              value={dados.precoCompraCriptoDolar}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="precoVendaCriptoDolar">Preço de Venda da Criptomoeda (em dólares)</label>
            <input
              type="number"
              id="precoVendaCriptoDolar"
              name="precoVendaCriptoDolar"
              value={dados.precoVendaCriptoDolar}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="taxaCambioRealDolar">Taxa de Câmbio Real para Dólar</label>
            <input
              type="number"
              id="taxaCambioRealDolar"
              name="taxaCambioRealDolar"
              value={dados.taxaCambioRealDolar}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="taxaCambioRealDolarEpoca">Taxa de Câmbio Real para Dólar na Época do Investimento</label>
            <input
              type="number"
              id="taxaCambioRealDolarEpoca"
              name="taxaCambioRealDolarEpoca"
              value={dados.taxaCambioRealDolarEpoca}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Botão de Envio */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Gerar Relatório
        </button>
      </form>
    </div>
  )
}

export default InvestReportForm
