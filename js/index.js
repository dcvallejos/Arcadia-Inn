const buttons = document.querySelectorAll("[data-carousel-button]")
const buttonNext = document.querySelector(".next")
const burga = ".burguer-ico";

function randomizer(){
  return Math.floor(Math.random()*100);  
}
// El cambiador de la hamburguesa
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
//NOTICIAS FETCH JSON

function traerCartas(fuente,clase,subclase){
fetch(`${fuente}`)
  .then(response => response.json())
  .then((data)=>{
    for(let i=0;i<6;i++){
      document.querySelector(`${clase}`).querySelector(`${subclase}`).innerHTML+=`
      <article class="card">
        <div><img class="photo" src="${data[i].foto}"></div>
        <div class="titulo">${data[i].titulo}</div>
        <div class="description">${data[i].descripcion}</div>
        <div class="seemore"><a href="${data[i].link}"><p>Ver más</p></a></div>

      </article>
      `
    }
  })
}


function miniaturas(){
  var pos=0;
  fetch(`../assets/json/noticias.json`).then(response=>response.json()).then(data =>{
    for(let i =0; i<3;i++){
      pos++
      document.querySelector(".listaMinis").innerHTML+=      
      ` <li class="mini-card">
      <div class="imagen-mini"><img src="${data[i].foto}" alt="Img1"></div>
      <a class="link-mini" href="${data[i].link}"></a>
      <div class="contenido-miniatura">
      <div class="pos">${pos}</div>
      <div class="tipo-mini">Noticia</div>
      <div class="titulo-mini">${data[i].titulo}</div>
      </div>
      </li>
      `
    }
  })
  fetch(`../assets/json/reviews.json`).then(response=>response.json()).then(data =>{
    for(let i =0; i<3;i++){
      pos++
      document.querySelector(".listaMinis").innerHTML+=      
      ` <li class="mini-card">
      <div class="imagen-mini"><img src="${data[i].foto}" alt="Img1"></div>
      <a class="link-mini" href="${data[i].link}"></a>
      <div class="contenido-miniatura">
      <div class="pos">${pos}</div>
      <div class="tipo-mini">Review</div>
      <div class="titulo-mini">${data[i].titulo}</div>
      </div>
      </li>
      `
    }
  })
  
}

function knowWhat(fuente){
  fetch(`${fuente}`).then(response=>response.json()).then(data =>{
    document.querySelector(".knowhat").innerHTML=`
    
    <img class="knowhat-fotito" src="/assets/img/beer-mug.gif">
    <div class="knowhat-content">${data[randomizer()].content}</div>
    <button class="knowhat-button" onclick="knowWhat('../assets/json/knowhat.json')"> <i class="fa-solid fa-recycle fa-xl"></i></button>
    `
  })
}


// Carousel
function carousel(){buttons.forEach(button => {
  button.addEventListener("click", () => {
    
    clearInterval(myInterval)
    myInterval = setInterval(()=>{buttonNext.click()}, 7000)
    
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]");
    
    
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    
    if (newIndex < 0)
    newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length)
    newIndex = 0;
    
    slides.children[newIndex].dataset.active = true;
    
    delete activeSlide.dataset.active;
    
  });
});
}
function photoCarousel(fuente){
  fetch(`${fuente}`).then(response=>response.json()).then(data =>{
    for(let i=0; i<3; i++){
      document.querySelector(".data-slides").innerHTML+=      
      ` <li class="slide">
          <img src="${data[i].foto}" ${i==0?"data-active=true":""} alt="Img1">
          <p class="subtitle">${data[i].titulo}</p>
        </li>
      `
    }
  })
}


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
          <li><a href="#noticias">Noticias</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#opinion">Opiniones</a></li>
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
  <a href="#">Contacto</a>
  <a href="#">Unite</a>
  <a href="#">Prensa</a>
</div>
  `
}



// MAIN 

// Carousel automatizado

header();


var myInterval = setInterval(()=>{buttonNext.click()}, 7000)

carousel()
setTimeout(()=>{buttonNext.click()}, 200)
var noticiasCarousel = photoCarousel('../assets/json/noticias.json')
var reviewsCarousel = photoCarousel('../assets/json/reviews.json')
miniaturas()


knowWhat('../assets/json/knowhat.json');


document.addEventListener("click", hideMenu);


window.onresize = ()=>{hideMenuOnResize();}

traerCartas('../assets/json/noticias.json','.noticias','.container')
traerCartas('../assets/json/reviews.json','.reviews','.container')
traerCartas('../assets/json/opiniones.json','.opinion','.container')

footer();



  


