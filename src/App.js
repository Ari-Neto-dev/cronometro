import React,{Component} from 'react';
import './style.css'

class App extends Component{
  render(){
    return(
      <div className='container'>
        <img src={require('./assets/cronometro.png')} alt="" className='img'/>
        <a className='timer'> 0.0</a>

        <div className='areaBotao'>
          <a className='botao'> VAI </a>
          <a className='botao'> LIMPAR </a>

        </div>

      </div>
    );
  }
}
export default App;