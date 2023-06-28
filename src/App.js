import React from 'react';
import {  Input, Divider, Alert } from 'antd';
import './App.css';

function App(){

  return (
    <Divider>
      <form onSubmit={presion}>
        <p>
          <Input type="letter" name="valor1" />
        </p>
        <p>
          <Input type="submit" value="Ingresar" />
        </p>
      </form>
    </Divider>
  );

  function presion(e) {
    e.preventDefault();
   let letras=(e.target.valor1.value);
   
   let vocales = ['a','e','i','o','u'];
   let cantidad = 0;
   
   for(let i = 0; i < letras.length; i++){
       for(let l = 0; l < vocales.length; l++){
          
       if(letras[i] == vocales[l]){cantidad++;}
   
       }
   }
   alert('Total de vocales: ' +cantidad);
   }
}
  
export default App;