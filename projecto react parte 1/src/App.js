import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota]; //insere a ultima nota ao final das demais
    const novoEstado = {
      notas: novoArrayNotas,
    }; // const com o novo estado do array de notas
    //atualiza meu render com esse novo estado das notas.
    this.setState(novoEstado); // o const criado anteriormente atualiza o estado e renderiza assim
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
