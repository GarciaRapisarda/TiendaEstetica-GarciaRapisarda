import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer';
import Contacto from './Components/Contacto';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Categorias from './Components/Categorias';
import Detail  from './Components/Detail';
import Cart from './Components/Cart';
import './Components/firebase';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes> 
        <Route path="/" element={<App/>}>
        <Route index element={<ItemListContainer/>} />
        
        <Route path="ItemDetailContainer" element={<ItemDetailContainer/>} />
        <Route path="Contacto" element={<Contacto />} />
        <Route path="Item/:id" element={<Detail/>} />
        <Route path="Categorias" element={<Categorias/>} />
        <Route path="Category/:categoryId" element={<Categorias />}/>
        
        <Route path="Item/:id/Cart" element={<Cart />}/>
        
         
        
        </Route>  
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();