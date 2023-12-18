'use client'

import { useState } from 'react'

import InvestReport from '@/components/atoms/InvestReport'
import InvestReportForm from '@/components/atoms/InvestReportForm'


export default function InvestReportPage () {
  const [relatorio, setRelatorio] = useState(null)

  const handleRelatorioGerado = (novoRelatorio) => {
    setRelatorio(novoRelatorio)
  }

  return (
    <>
      <InvestReportForm onRelatorioGerado={handleRelatorioGerado} />

      {relatorio && <InvestReport report={relatorio} />}
    </>
  )
}
