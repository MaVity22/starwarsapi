import logo from '../img/img2.png';
import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';


const CustomOption = ({ innerProps, label, data }) => (
    <div {...innerProps}>
        <img src={data.image} alt={label} />
        <span >{label}</span>
    </div>
);

const MenuDesplegable = (props) => {
    const {opciones, valor, setValor} = props;
    
    const opkHandler = (option) => {
        const escogido = option.value;
        setValor(escogido);
        console.log(valor);
        /*axios.get('https://swapi.dev/api/'+valor)
          .then(response => {
            console.log(response.data.results);
            //setRecursos(response.data.results)
        })*/
      };
    
    return (
        <div className="dropdown">
            <Select options={opciones} components={{ Option: CustomOption }} onChange={opkHandler} />
        </div>
    );
};

export default MenuDesplegable;