import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer';
import Cart from './Components/Cart';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Formulario from './Components/Formulario/Formulario';
import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}>
				<Route index element={<ItemListContainer />} />
				<Route path='/Category/:categoryId' element={<ItemListContainer />} />
				<Route
					path='/Category/:categoryId/Item/:id'
					element={<ItemDetailContainer />}
				/>
				<Route path='/Item/:id' element={<ItemDetailContainer />} />
				<Route path='*' element={<ItemListContainer />} />
				<Route path='/Cart' element={<Cart />} />
				<Route path='/Formulario' element={<Formulario />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
