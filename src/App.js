import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [temporizador, setTemporizador] = useState(0);
  const [empezar, setEmpezar] = useState(false);
  const [etiqueta, setEtiqueta] = useState("Iniciar")



  useEffect(()=>{

    if(empezar){
      const intervalo = setInterval(() => setTemporizador(temporizador=>temporizador+1), 1000); 
      return () => {
        clearInterval(intervalo);
      };
    }

  },[empezar])

  const iniciar = () => {
    setEmpezar(true);
    setEtiqueta("Continuar")
  }

  const detener = () => {
    setEmpezar(false);
    
  }

  const parar = () => {
    setEmpezar(false);
    setTemporizador(0);
    setEtiqueta("Iniciar")
  }

  return (
    <div className="App">
      <p className='text-500 text-5xl p-8'>{temporizador}</p>
      <p>

        <button className={etiqueta==='Continuar' && empezar===true?'text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"':'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"'} disabled={etiqueta==='Continuar' && empezar===true} onClick={iniciar}>{etiqueta}</button>
        <button className={etiqueta==='Iniciar' || (etiqueta=== 'Continuar' && empezar===false)?'text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"':'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"'} disabled={etiqueta==='Iniciar' || (etiqueta=== 'Continuar' && empezar===false)} onClick={detener}>Detener</button>
        <button className={etiqueta==='Iniciar' || (etiqueta=== 'Continuar' && empezar===false)?'text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"':'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"'} disabled={etiqueta==='Iniciar' || (etiqueta=== 'Continuar' && empezar===false)} onClick={parar}>Parar</button></p>

    </div>
  );
}

export default App;
