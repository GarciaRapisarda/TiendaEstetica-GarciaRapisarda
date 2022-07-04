import CartWidget from "./CartWidget";

const NavBar = () => {
      return ( 
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Estética Viáfara</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link text-white" aria-current="page" href="#">Home</a>
        <a className="nav-link text-white" href="#">Servicios</a>
        <a className="nav-link text-white" href="#">Productos</a>
        <a className="nav-link text-white" href="#">Contacto</a>
        </div>
    </div>
    <CartWidget/>
  </div>
</nav>
    

      );
};

export default NavBar;
  