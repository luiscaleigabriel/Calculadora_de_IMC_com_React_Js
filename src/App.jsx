import { useState } from 'react'
import './App.css'

function App() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [msg, setMsg] = useState('')

  function calcularIMC() {
    const imc = peso / (altura * altura)

    if(!isNaN(peso) && !isNaN(altura)) {
      if(imc < 17) {
        setMsg(`Você está muito a baixo do peso! Seu IMC: ${imc.toFixed(2)}`)
      }else if(imc >= 17 && imc < 18.5) {
        setMsg(`Você está a baixo do peso! Seu IMC: ${imc.toFixed(2)}`)
      }else if(imc >= 18.5 && imc < 25) {
        setMsg(`Peso ideal! Seu IMC: ${imc.toFixed(2)}`)
      }else if(imc >= 25 && imc < 30) {
        setMsg(`Você está acima do peso! Seu IMC: ${imc.toFixed(2)}`)
      }else if(imc >= 30 && imc < 35) {
        setMsg(`Obesidade grau I. Seu IMC: ${imc.toFixed(2)}`)
      }else if(imc >= 35 && imc <= 40) {
        setMsg(`Obesidade grau II (severa)! Seu IMC: ${imc.toFixed(2)}`)
      }else if(imc > 40) {
        setMsg(`Obesidade grau III (mórbida)! Seu IMC: ${imc.toFixed(2)}`)
      }
    }else {
      alert('Informe um peso/altura válida!')
    }
    

  }

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <span>Vamos calcular o seu IMC</span>

      <div className="area-input">
        <input 
          type="text"
          value={peso}
          onChange={ (e) => setPeso(e.target.value) }
          placeholder="Peso em (Kg) Ex: 99"
        />
        <input 
          type="text" 
          value={altura}
          onChange={ (e) => setAltura(e.target.value)  }
          placeholder="Altura em (m) Ex: 1.5"
        />
        <button onClick={ calcularIMC }>
          Calcular
        </button>
      </div>

      <h2>{ msg }</h2>
    </div>
  )
}

export default App
