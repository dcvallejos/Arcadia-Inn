const buttons = document.querySelectorAll("[data-carousel-button]")
const buttonNext = document.querySelector(".next")
const burga = ".burguer-ico";


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
fetch(`/${fuente}`)
  .then(response => response.json())
  .then((data)=>{
    for(let i in data){
      document.querySelector(`${clase}`).querySelector(`${subclase}`).innerHTML+=`
      <article class="card">
        <img class="photo" src="${data[i].foto}">
        <div class="titulo">${data[i].titulo}</div>
        <div class="description">${data[i].descripcion}</div>
        <div class="seemore"><a href="#">Ver mas</a></div>
      </article>
      `
    }
  })
}

function photoCarousel(fuente){
  fetch(`/${fuente}`).then(response=>response.json()).then(data =>{
    for(let i=0; i<3; i++){
      document.querySelector(".data-slides").innerHTML+=      
      ` <li class="slide">
          <img src="${data[i].foto}" ${i==0?"data-active":""} alt="Img1">
          <h1 class="subtitle">${data[i].titulo}</h1>
        </li>
      `
    }
  })

}

function miniaturas(fuente){
  fetch(`/${fuente}`).then(response=>response.json()).then(data =>{
    for(let i in data){
      document.querySelector(".listaMinis").innerHTML+=      
      ` <li class="mini-card">
            <div class="imagen-mini"><img src="${data[i].foto}" alt="Img1"></div>
          <div class="contenido-miniatura">
            <div>${data[i].id}</div>
            <div>${data[i].nature}</div>
            <div>${data[i].titulo}</div>
          </div>
        </li>
      `
    }
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


setTimeout(()=>{buttonNext.click()}, 50)
var myInterval = setInterval(()=>{buttonNext.click()}, 7000)


// Carousel automatizado
photoCarousel('noticias.json')
miniaturas('noticias.json')

carousel()


// MAIN 



document.addEventListener("click", hideMenu);

window.onresize = ()=>{hideMenuOnResize();}

traerCartas('noticias.json','.noticias','.container')
traerCartas('reviews.json','.reviews','.container')
traerCartas('opiniones.json','.opinion','.container')




  


