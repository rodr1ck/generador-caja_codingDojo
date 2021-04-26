import {useState, useEffect} from 'react';
import FormularioColor from './components/FormularioColor'
import './App.css';
import PadreCajas from './components/PadreCajas';
import Caja from './components/Caja';

function App() {
  const [colores, setColores] = useState([])
  const [color,setColor] = useState({color:'red'})

  useEffect(() => {
    setColores((existentes) =>[color, ...existentes])
  }, [color]);

console.log(colores)
const cajas = colores.map((c, index) => <Caja color={c} key={index} />)

  return (
    <>
      <FormularioColor addColor={setColor}/>
      <PadreCajas>
        {cajas}
      </PadreCajas>
    </>
  );
}

export default App;
