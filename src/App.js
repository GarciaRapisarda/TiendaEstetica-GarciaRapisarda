
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './App.css';

import { Link, Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Tienda online"} />
      
      
      
      
    </div>
  );
}

export default App;
