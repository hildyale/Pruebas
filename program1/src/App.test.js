import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ListaLigada} from './ListaLigada'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('Prueba de insertar en lista ligada', () => {
  let listaLigada = new ListaLigada();
  listaLigada.insertar(20);
  expect(listaLigada.valor(0)).toEqual(20);
});

it('Prueba de eliminar en lista ligada', () => {
  let listaLigada = new ListaLigada();
  listaLigada.insertar(20);
  listaLigada.insertar(30);
  listaLigada.insertar(40);
  listaLigada.eliminar_lista();
  expect(listaLigada.size()).toEqual(0);
});

it('Prueba de tamaño de lista ligada', () => {
  let listaLigada = new ListaLigada();
  listaLigada.insertar(20);
  listaLigada.insertar(10);
  expect(listaLigada.size()).toEqual(2);
});

it('Prueba de promedio columna1', () => {
  let listaLigada = new ListaLigada();
  listaLigada.insertar(160);
  listaLigada.insertar(591);
  listaLigada.insertar(114);
  listaLigada.insertar(229);
  listaLigada.insertar(230);
  listaLigada.insertar(270);
  listaLigada.insertar(128);
  listaLigada.insertar(1657);
  listaLigada.insertar(624);
  listaLigada.insertar(1503);
  var promedio = listaLigada.mean();
  expect(promedio).toEqual(550.6);
});

it('Prueba de promedio columna2', () => {
  let listaLigada = new ListaLigada();
  listaLigada.insertar(15.0);
  listaLigada.insertar(69.9);
  listaLigada.insertar(6.5);
  listaLigada.insertar(22.4);
  listaLigada.insertar(28.4);
  listaLigada.insertar(65.9);
  listaLigada.insertar(19.4);
  listaLigada.insertar(198.7);
  listaLigada.insertar(38.8);
  listaLigada.insertar(138.2);
  var promedio = listaLigada.mean();
  expect(promedio).toEqual(60.32);
});

it('Prueba de desviación estandar columna1', () => {
  let listaLigada = new ListaLigada();
  listaLigada.insertar(160);
  listaLigada.insertar(591);
  listaLigada.insertar(114);
  listaLigada.insertar(229);
  listaLigada.insertar(230);
  listaLigada.insertar(270);
  listaLigada.insertar(128);
  listaLigada.insertar(1657);
  listaLigada.insertar(624);
  listaLigada.insertar(1503);
  var std = listaLigada.std();
  expect(std).toEqual(572.03);
});

it('Prueba de desviación estandar columna2', () => {
  let listaLigada = new ListaLigada();
  listaLigada.insertar(15.0);
  listaLigada.insertar(69.9);
  listaLigada.insertar(6.5);
  listaLigada.insertar(22.4);
  listaLigada.insertar(28.4);
  listaLigada.insertar(65.9);
  listaLigada.insertar(19.4);
  listaLigada.insertar(198.7);
  listaLigada.insertar(38.8);
  listaLigada.insertar(138.2);
  var std = listaLigada.std();
  expect(std).toEqual(62.26);
});

it('Prueba de lectura de archivo', () => {
  let listaLigada = new ListaLigada();
  var datos="/home/estudiantes/alejandro.isazad/Downloads/datos.txt"
  if(file_exists(datos)){
    console.log("hh")
  }
  //expect(promedio).toEqual(15);
});


