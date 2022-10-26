const burga = ".burguer-ico";


function header(){
    document.querySelector(".header").innerHTML =
    `
    <div class="burguer-ico" onclick="changeMenu(this)">
          <div class="bar-1"></div>
          <div class="bar-2"></div>
          <div class="bar-3"></div>
        </div>
        <nav>
          <ul class="nav-list">
            <li><a href="/index.html"><i class="fa-solid fa-house fa-xl"></i></a></li>
            <li><a href="/index.html#noticias">Noticias</a></li>
            <li><a href="/index.html#reviews">Reviews</a></li>
            <li><a href="/index.html#opinion">Opiniones</a></li>
            <li><a href="/internal/contacto/contacto.html">Contacto</a></li>
          </ul>
        </nav>
        <div class="user-ico"><i class="fa-solid fa-user fa-xl"></i></div>
    `
  }
  
  function footer(){
    document.querySelector(".footer").innerHTML=
    `
    <div class="rs">
    <a><i class="fa-brands fa-facebook fa-lg"></i></a>
    <a><i class="fa-brands fa-square-twitter fa-lg"></i></a>
    <a><i class="fa-brands fa-square-instagram fa-lg"></i></a>
    <a><i class="fa-brands fa-discord fa-lg"></i></a>
    <a><i class="fa-brands fa-youtube fa-lg"></i></a>
    <a><i class="fa-brands fa-github fa-lg"></i></a>
  </div>
  <div class="notes">
    <div>ArcadiaInn Group © 2022</div>
    <div>Calle Falsa 1234 - Buenos Aires - Argentina</div>
    <div><a href="#">arcadiainn@outlook.com</a></div>
  </div>
  <div class="links">
    <a href="/internal/contacto/contacto.html">Contacto</a>
    <a href="#">Unite</a>
    <a href="#">Prensa</a>
  </div>
    `
  }



  function changeMenu(x) {
    x.classList.toggle("change");
    }
    
    // Chequea si cuando se hace click se esta targeteando con el mouse a la hamburguesa o a la ventana
    //  Si clickea fuera del menu, se quita la clase activadora de burga y el drop-down menu
    // Si clickea en la burga, se agrega la clase drop-down
    function hideMenu(e){
      const selectBurguer = e.target.closest(burga);
      
      if(e.target && selectBurguer){
        document.querySelector('.header').classList.toggle('toggle')
      }
      else if(e.target && !selectBurguer){
        hideMenuElements();
      }
    }
    
    // Oculta item menu desplegado y burga abierta
    function hideMenuElements(){
      document.querySelector('.header').classList.remove('toggle');
      document.querySelector('.burguer-ico').classList.remove('change');
    }
  
    
    //Cuando la pantalla supera los 768 px, el menu se minimiza y la burga cambia
  function hideMenuOnResize() {
    var w = window.outerWidth;
    if (w > 768) {
      hideMenuElements();
    }
  }
  
  header();
  footer();
  document.addEventListener("click", hideMenu);
  window.onresize = ()=>{hideMenuOnResize();}