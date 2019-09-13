import React from 'react';
import logo from './logo.svg';
import './App.css';
import './web3';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {activo: 'TBD', value: '', message: ''};
  }

  async componentDidMount() {
    // rxotx
    const activo = await ABI.methods.activo().cal();
    this.setState({activo})
  }

  onSubmit = async event => {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

}

export default App;
