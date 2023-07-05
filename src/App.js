import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import MenuDesplegable from './components/MenuDesplegable';
import logo from './img/img2.png';

function App() {

  // Se crea una variable golbal para los recursos de la Api
  const [valorMenu, setValorMenu] = useState("");

  const options = [
    { value: 'people', label: 'People', image: logo },
    { value: 'planets', label: 'Planets', image: logo },
    { value: 'starships', label: 'Starships', image: logo },
    { value: 'vehicles', label: 'Vehicles', image: logo },
    { value: 'species', label: 'Species', image: logo },
    { value: 'films', label: 'Films', image: logo }
  ];

  return (
    <div>
      <label id='recurso'>Search for:</label>
      <MenuDesplegable opciones= {options} valor={valorMenu} setValor= {setValorMenu}/>
    </div>
  );
}

export default App;
