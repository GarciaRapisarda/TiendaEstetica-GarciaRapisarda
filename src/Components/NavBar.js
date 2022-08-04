import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";





const NavBar = () => {
      return ( 
      
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <NavLink to="/">
      <div className="navbar-brand text-white">Estética Viáfara</div>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <NavLink to="/">
        <div className="nav-link text-white" aria-current="page">Home</div>
        </NavLink>
        <NavLink to="/Category/men's%20clothing">
        <div className="nav-link text-white" >Men's Clothing</div>
        </NavLink>
        <NavLink to="/Category/jewelery">
        <div className="nav-link text-white" >Jewelery</div>
        </NavLink>
        <NavLink to="/Category/electronics">
        <div className="nav-link text-white">Electronics</div>
        </NavLink>
        </div>
    </div>
    <CartWidget/>
  </div>

</nav>




      

      );
};

export default NavBar;