
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Tienda online"} />
      
      <ItemDetailContainer />
      
      
    </div>
  );
}

export default App;
