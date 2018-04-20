import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ListaLigada} from './ListaLigada'

class App extends Component {

  constructor (){
    super()
    var listaLigada = new ListaLigada();
 
    this.state = {
      valor : '',
      listaLigada: listaLigada,
      promedio: 0,
      std: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
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
    var listaLigada = this.state.listaLigada;
    listaLigada.insertar(this.state.valor);
    var promedio = listaLigada.mean();
    var std = listaLigada.std();
    this.setState({
      valor: '',
      promedio: promedio,
      std: std
    });
    event.preventDefault();
  }

  handleFileSelect(evt) {
    var listaLigada = this.state.listaLigada;
    listaLigada.eliminar_lista();
    var files = evt.target.files;
    var data = '';
    var promedio=0;
    var std =0;
    var reader = new FileReader();  //Se lee el  archivo
    var f=files[0];
    reader.onload = function (evt) {
          data = evt.target.result;//Se guardan los datos
          var datos_array = data.split(','); //separapor salto de linea
          for (var i=0; i < datos_array.length; i++) {
            
              listaLigada.insertar(parseFloat(datos_array[i]));           
          }
          promedio = listaLigada.mean();
          console.log(promedio)
          std = listaLigada.std();
          reader.readAsText(f);

      };
      this.setState({
        valor: '',
        promedio: promedio,
        std: std
     });
      console.log(data);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Program 1</h1>
        </header>
        <div className="App-intro">
          <form onSubmit={this.handleSubmit}>
             <div className="form-group row">
             <div className="col">
              <input type="number" className="form-control" id="valor" value={this.state.valor} onChange={this.handleChange} placeholder="Valor" min="-1000000000" max="1000000000" step="any" required />
              </div>
              <div className="col"> 
              <button type="submit" className="btn btn-primary">Ingresar</button>
              </div>
            </div>
            <div className="form-group">
              <input type="file" className="form-control-file" onChange={this.handleFileSelect} id="exampleFormControlFile1"/>
            </div>
          </form>
          <p>Promedio: {this.state.promedio}</p> 
          <p>Desviacion Estandar: {this.state.std}</p>   
        </div>
      </div>
    );
  }
}

export default App;
