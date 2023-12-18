import Image from 'next/image'
import favicon from '../public/favicon.svg'

export default function Home () {
  return (
    <div >
      <div>
        <div>
          <div className='text-justify'>
            <div className="flex justify-center items-end gap-2">
              <Image src={favicon} width={64} />
              <h2 className="text-3xl font-semibold mb-4 text-center"> InvestCalc.js </h2>
            </div>

            <br />
            <hr />
            <br />

            <p>
              Bem-vindo à InvestCalc, uma aplicação simples onde busco oferecer calculadoras para auxiliar
              nas suas decisões financeiras. <strong>Atualmente</strong>, nossa calculadora de investimento em criptomoedas
              é a principal funcionalidade da aplicação.
            </p>

            <br />

            <p>
              Meu objetivo com ess aplicação é democratizar os investimentos através de fornecer
              conhecimento e ferramentas simples e eficazes para ajudar as pessoas a entender melhor
              este mundo, derrubando o absurdo estigma de que investir não é para todos.
            </p>

            <br />
            <p className='text-center font-bold'>Investir é para todos!</p>
            <br />

            <p>
              Usando o <strong>"Menu"</strong> explore as diferentes seções da aplicação para utilizar as funcionalidades disponíveis e
              aprender mais sobre investimentos. Estamos comprometidos em fornecer informações úteis
              para apoiar suas decisões financeiras.
            </p>

            <br />

            <p>
              Se tiver alguma dúvida ou feedback, não hesite em entrar em contato comigo!
            </p>

            <br />

            <div className="flex justify-center mt-4 space-x-4 underline text-blue-500">
              <a href="https://www.linkedin.com/in/andersonbosa" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/andersonbosa" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://twitter.com/t4inha" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
