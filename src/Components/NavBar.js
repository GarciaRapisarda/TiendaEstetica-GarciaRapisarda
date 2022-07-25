import CartWidget from "./CartWidget";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";




const NavBar = () => {
      return ( 
      
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link to="/">
      <div className="navbar-brand text-white">Estética Viáfara</div>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link text-white" aria-current="page" href="#">Home</a>
        <a className="nav-link text-white" href="#">Productos</a>
        <Link to="/categorias">
        <a className="nav-link text-white" href="#">Categorias</a>
        </Link>
        <Link to="Contacto">
        <div className="nav-link text-white">Contacto</div>
        </Link>
        </div>
    </div>
    <CartWidget/>
  </div>

</nav>




      

      );
};

export default NavBar;
  