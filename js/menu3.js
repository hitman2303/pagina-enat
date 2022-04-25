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

const itf = document.querySelector(".itf")
itf.addEventListener("click",()=>{
	alert ("se abrira una nueva pestaña");
	window.open("https://es.wikipedia.org/wiki/Federaci%C3%B3n_Internacional_de_Taekwondo");
})

