# Trabajo_1_codoacodo

Miembros:
  /Daniel Vallejos
  /Hugo Grinchetti
  /Soledad Rodriguez
  
Arcadia Inn:
  El presente proyecto es el frontend de una pagina web de analisis de videojuegos y tecnologia, ambientada dentro de un estilo de posada medieval pixel art. Se pasara a detallar la funcionalidad de la misma a continuacion:
  
  => Esta conformado por mas de 5 secciones, siendo las mismas: 
      - Un panel de navegacion, que esta dirigido a distintas secciones del sitio y un intem de redireccion al formulario de contacto.
      - Un carrousel de imagenes automatizado mediante js
      - Una seccion de miniaturas del carrousel con vinculos externos.
      - Una seccion de reviews, noticias y opiniones en donde se listan una foto, extracto y link de cada una. (todas consumen un json)
      - Un banner publicitario (Sin funcionalidad)
      - Una seccion de trivia que consume un json en donde al apretar un boton se selecciona aleatoriamente de una lista de hechos sobre videojugos.
      - Una seccion de twitter timeline, el cual refleja el estado de una red social mock realizada para este trabajo.
      - Un footer con datos, correo, redes sociales y vinculos de interes.
      
    => Asimismo esta conformado por 3 paginas web centrales (Landing page, Home page y Contacto) y diversas paginas web en donde se encuentran los articulos de reviews, noticias y opiniones.
    
    => Se estructuro el sitio en base a etiquetas generales <header><main><aside><section><footer>
    
    => Se ha realizado el formulario utilizando el sistema de validacion de bootstrap, asimismo consume un servicio externo de mailing completamente funcional.
    
    => Se utilizan varios Iframe en cada uno de los articulos del sitio (en particular reviews y noticias), optando por otro lado en utilizar iconos de FontAwesome como tambien seleccionar una fuente de estilo medieval de Google Fonts.
    
    => Pagina completamente responsive con varios puntos de quiebre en donde se ajustan los contenedores de imagenes y el orden de las secciones.
    
    => Con la pantalla a menos de 868 px la barra de tareas pasa a ser colapsible utilizando un menu hamburguesa con transicion, asimismo el despliegue del nav-list tiene transicion y cada card tiene una transicion incluida en la etiqueta "ver mas".
    
    => Se ha consumido el servicio de https://animate.style para animar principalmente el sector de trivia de curiosidades, tanto el boton como la aparicion del texto.
    
    => Estructura HTML maquetada en base a grid y en el interior de secciones con flex.
    
    => Si bien no se esta consumiento una API REST externa, se opto por la misma funcionalidad del sitio consumir json's internos.
    
    => El logo de usuario ha quedado para una implementacion futura de inicio de sesion
    
    => Los iconos de redes sociales son meramente decorativos.
    
    => Subido a netlify
    
    
