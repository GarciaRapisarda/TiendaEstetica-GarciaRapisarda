import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";





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
        <Link to="/">
        <div className="nav-link text-white" aria-current="page">Home</div></Link>
        <div className="nav-link text-white" >Productos</div>
        <Link to="/categorias">
        <div className="nav-link text-white" >Categorias</div>
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
  