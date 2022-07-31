import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import { CartContextProvider } from './Components/Context/CartContext';



function App() {
 
  return (
    <div className="App">
     <CartContextProvider> 
      <NavBar />     
    
    <main>
      <Outlet />
    </main>
    </CartContextProvider>
  </div>
  );
}

export default App;
