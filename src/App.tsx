import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'fomantic-ui-less/semantic.less';
import { SomeComponent } from './components/SomeComponent/SomeComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SomeComponent/>
        </a>
      </header>
    </div>
  );
}

export default App;
