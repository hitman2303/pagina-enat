const Toggle= document.querySelector(".toggle")
Toggle.addEventListener("click",()=>{
  nav_menu.classList.toggle("nav_menu_visible");
})
const nav_menu= document.querySelector(".nav_menu");

if(nav_menu.classList.contains("nav_menu_visible")){
  Toggle.setAttribute("aria-label", "Cerrar menu");
} else{
Toggle.setAttribute("aria-label", "Abrir menu")
}

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrousel__lista'), {
		  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: true,
  dots: '.carrousel__indicadores',
  arrows: {
    prev: '.carrousel__anterior',
    next: '.carrousel__siguiente'
  }
	});
   responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
})


const itf = document.querySelector(".itf")
itf.addEventListener("click",()=>{
  alert ("se abrira una nueva pestaña");
  window.open("https://es.wikipedia.org/wiki/Federaci%C3%B3n_Internacional_de_Taekwondo");
})
