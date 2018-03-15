import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {lista_ligada} from './utils/ListaLigada'

var listaLigada = new lista_ligada();

class App extends Component {
  constructor (){
    super()
    console.log('¿Tiene elementos?', listaLigada.tiene_elementos());
    console.log('Tamaño de la lista', listaLigada.size());
    console.log('Imprime los elementos', listaLigada.toString()); 

    this.state = {
      valor : '',
      b0: 0,
      b1: 0,
      correla: 0,
      r2: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validar = function(dato){
      if (!/^([0-9999999999999999999999999999])*$/.test(dato))
        return false;
    };
  }

  handleChange(event) {
    var input = event.target.id;
    this.setState({[input]: event.target.value});
    //console.log(input+' -- '+event.target.value);
    //console.log(this.state);
  }

  handleSubmit(event) {
    console.log(this.state.valor);
    
    listaLigada.eliminar_lista();
    var valores = this.state.valor;//Se guardan los valores entrados  por teclado


    var datos= valores.split(',');//separa por coma
    var j=0
    while (j < datos.length) {
      listaLigada.insertar(parseInt(datos[j],10),parseInt(datos[j+1],10));//Se insertan en la lista
    j=j+2;
    }
    var b0=listaLigada.calcularB0(listaLigada)
    var b1=listaLigada.calcularB1(listaLigada)
    var correla=listaLigada.calcularCorrelacion(listaLigada)
    var r2=listaLigada.calcularCuadradoR(listaLigada)
    console.log(b0,b1,correla,r2);

    this.setState({
      valor: '',
      b0,
      b1,
      correla,
      r2
    });
    event.preventDefault();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Program 2</h1>
        </header>
        <div className="App-intro">
          <form onSubmit={this.handleSubmit}>
             <div className="form-group row">
             <div className="col">
              <input type="text" className="form-control" id="valor" value={this.state.valor} onChange={this.handleChange} placeholder="Valores" maxLength="100" pattern=".{3,}" required />
              </div>
              <div className="col"> 
              <button type="submit" className="btn btn-primary">Ingresar</button>
              </div>
            </div>
          </form>
          <p>B0: {this.state.b0}</p> 
          <p>B1: {this.state.b1}</p>   
          <p>Correlacion: {this.state.correla}</p> 
          <p>R2: {this.state.r2}</p> 
        </div>
      </div>
    );
  }


}

export default App;
