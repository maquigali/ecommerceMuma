import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import FunctionalComponent from './componentes/FunctionalComponents/FunctionalComponent';
import ClassComponent from './componentes/ClassComponents/ClassComponent';
import Saludo from './componentes/ItemListContainer/ItemListContainer';
import Item from './componentes/Item/Item'

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <header className="App-header">
        <Saludo/>
        
        {/*<ul>
          <Item nombre='Contacto' url={'/'} />
          <Item nombre='Contacto' url={'/'} />
          <Item nombre='Contacto' url={'/'} />

        </ul>
        <FunctionalComponent producto="Pelota Montessori" precio="$1200"/>
        <ClassComponent />
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
  </a> */}
      </header>
    </div>
  );
}

export default App;
