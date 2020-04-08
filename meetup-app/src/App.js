import React from 'react';
import Hello, { Ola } from './components/Hello'
import GoodMorning from './components/GoodMorning';

export default class App extends React.Component {

  state = {
    turnoEscolhido: 'morning',
    texto: 'Oi, eu sou o Goku',
    name: 'Fulano'
  }

  trocarTurno(turno, texto) {
    this.setState({turnoEscolhido : turno, texto});
  }

  setName(name) {
    this.setState({ name })

  }

  render() {
    return (
      <>

        <Hello name={this.state.name}/>
        <Ola/>
        <GoodMorning time={this.state.turnoEscolhido}/>
        <h1>{this.state.texto}</h1>

        <button onClick={() => this.trocarTurno('morning', 'Oi eu sou o goku')}> Clique morning </button>
        <button onClick={() => this.trocarTurno('afternoon', 'Ta de tarde')}> Clique afternoon </button>
        <button onClick={() => this.trocarTurno('night', 'Vou embora')}> Clique night </button>

        <input type='text' onChange={ (event) => this.setName(event.target.value)}/>

      </>
    )
  }


}