import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import FunctionalComponent from './componentes/FunctionalComponents/FunctionalComponent';
import ClassComponent from './componentes/ClassComponents/ClassComponent';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Item from './componentes/Item/Item'
import SuperForm from './componentes/SuperForm';
import Counter from './componentes/Counter';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactoPage } from './componentes/ContactoPage/ContactoPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Counter />
      
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/contacto" element={<ContactoPage/>}>
        </Route>
        
        
        {/*
        
      
        <header className="App-header">
        <ItemListContainer greeting={'Bienvenido a la Tienda de Rincon Muma!'}/>
       
        <SuperForm title='Holis'>
          <div>
            <h2>Chauchis</h2>
          </div>

  </SuperForm>
        
        
        
        <ul>
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
  </a> 
        </header>*/}
      </Routes>
      <ItemDetailContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
