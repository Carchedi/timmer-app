import logo from './logo.svg';
import './App.css';
import Timer from './timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <span style={{fontSize: 100 ,backgroundColor: 'white', padding: 30, 
                      'border-radius': 25, 'box-shadow': 'inset 6px 6px 10px 0 rgba(0, 0, 0, 0.5)'}}>
        <Timer maxRange={100}/> {/* time in sec decimals */}
        </span>
      </header>
    </div>
  );
}

export default App;
