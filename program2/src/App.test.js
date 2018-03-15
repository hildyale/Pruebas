import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {lista_ligada} from './utils/ListaLigada'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const valores = "130,186,650,699,99,132,150,272,128,291,302,331,95,199,945,1890,368,788,961,1601"

describe('Pruebas', () =>{

it('Test B0', () => {
      var listaLigada = new lista_ligada();
      var datos= valores.split(',');//separa por coma
      var j=0
      while (j < datos.length) {
        listaLigada.insertar(parseInt(datos[j],10),parseInt(datos[j+1],10));//Se insertan en la lista
        j=j+2;
      }
      var b0=listaLigada.calcularB0(listaLigada)
      var b0Fixed = parseFloat(b0.toFixed(2))
      expect(b0Fixed).toEqual(-22.55);
});

it('Test B1', () => {
  var listaLigada = new lista_ligada();
  var datos= valores.split(',');//separa por coma
  var j=0
  while (j < datos.length) {
    listaLigada.insertar(parseInt(datos[j],10),parseInt(datos[j+1],10));//Se insertan en la lista
    j=j+2;
  }
  var b1=listaLigada.calcularB1(listaLigada)
  var b1Fixed = parseFloat(b1.toFixed(4))
  expect(b1Fixed).toEqual(1.7279);
});

it('Test Correacion', () => {
  var listaLigada = new lista_ligada();
  var datos= valores.split(',');//separa por coma
  var j=0
  while (j < datos.length) {
    listaLigada.insertar(parseInt(datos[j],10),parseInt(datos[j+1],10));//Se insertan en la lista
    j=j+2;
  }
  var correlacion=listaLigada.calcularCorrelacion(listaLigada)
  var correlacionFixed = parseFloat(correlacion.toFixed(4))
  expect(correlacionFixed).toEqual(0.9545);
});

it('Test R al cuadrado', () => {
  var listaLigada = new lista_ligada();
  var datos= valores.split(',');//separa por coma
  var j=0
  while (j < datos.length) {
    listaLigada.insertar(parseInt(datos[j],10),parseInt(datos[j+1],10));//Se insertan en la lista
    j=j+2;
  }
  var r2=listaLigada.calcularCuadradoR(listaLigada)
  var r2Fixed = parseFloat(r2.toFixed(4))
  expect(r2Fixed).toEqual(0.9111);
});

});







