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
      <p>{temporizador}</p>
      <p><button onClick={iniciar}>{etiqueta}</button><button onClick={detener}>Detener</button><button onClick={parar}>Parar</button></p>
    </div>
  );
}

export default App;
