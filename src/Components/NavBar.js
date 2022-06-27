const NavBar = () => {
      return ( 
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Estética Viáfara</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a class="nav-link" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Servicios</a>
        <a class="nav-link" href="#">Productos</a>
        <a class="nav-link" href="#">Contacto</a>
      </div>
    </div>
  </div>
</nav>
    

      );
};

export default NavBar;
  