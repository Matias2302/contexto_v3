//Navbar
const navSlide = ()=> {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');

      //Animation links
      navLinks.forEach((link, index)=>{
          if(link.style.animation){
              link.style.animation = '';
          }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
          }
      });
      //burger animation
      burger.classList.toggle('toggle');
  });
  
}
navSlide();
//fin navbar

//otro boton con trigger
var BtnPdf = document.querySelector(".btn-pdf");
var BtnPdf2 = document.querySelector(".btn-pdf-2");
var informeFull = document.querySelector("#informe-pdf");
var informeFull_2 = document.querySelector("#informe-pdf-2");
var isHidden = true;

if(BtnPdf){
  function toggleClassBtnPdf(e){
    
      if (isHidden) {
        
        informeFull.classList.remove("out");
        informeFull.classList.add("active");
      } else {
        informeFull.classList.remove("active");
        informeFull.classList.add("out");
        
      }
      if (e.target.textContent === 'Leer más') {
        e.target.textContent = 'Leer menos';
        } else {
            e.target.textContent = 'Leer más';
        }
      isHidden = !isHidden;
    }
    BtnPdf.addEventListener("click", toggleClassBtnPdf);
  } 
  
  if(BtnPdf2){
    function toggleClassBtnPdf2(e){
      
        if (isHidden) {
          
          informeFull_2.classList.remove("out");
          informeFull_2.classList.add("active");
        } else {
          informeFull_2.classList.remove("active");
          informeFull_2.classList.add("out");
          
        }
        if (e.target.textContent === 'Leer más') {
          e.target.textContent = 'Leer menos';
          } else {
              e.target.textContent = 'Leer más';
          }
        isHidden = !isHidden;
      }
      BtnPdf2.addEventListener("click", toggleClassBtnPdf2);
    } 
    


/*===Contenido dinámico con trigger====*/
// Obtener el botón y el div con el texto adicional
const mostrarBtn = document.querySelector('.mostrarBtn');
const textoAdicional = document.querySelector('.texto-adicional');
const hero = document.querySelector('.hero');
const box = document.querySelector('.box');
const contextoLogo = document.querySelector('.contexto-logo');
var heroOculto = true;
//Si el elemento mostrarBtn existe hago todo lo demás
if (mostrarBtn) {

  function toggleClassesBtn(e){
    // Mostrar o ocultar el div con el texto adicional
    heroOculto = false;
    textoAdicional.classList.toggle('texto-adicional-full');
    textoAdicional.classList.toggle('fade-in');
    box.classList.toggle("box-1");
    box.classList.toggle("fade-in");
    box.classList.toggle("fade-out");
    hero.classList.toggle("hero-texto");
    contextoLogo.classList.toggle("slide-right");
    contextoLogo.classList.toggle("contexto-logo-mid");
    if (e.target.textContent === 'Más info') {
      e.target.textContent = 'Menos info';
      } else {
          e.target.textContent = 'Más info';
      }
    
        
  }  
  // Agregar un evento de clic al botón
  mostrarBtn.addEventListener("click", toggleClassesBtn);
}


/*================GLOASRIO==========================*/
const accordion = document.querySelector(".accordion");

if(accordion){
accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button");
  const activePanel = panelToActivate.querySelector(".accordion-content");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    panelToActivate
      .querySelector("button")
      .setAttribute("aria-expanded", false);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", true);
  } else {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", false);
  }
}

}
/*========================================*/
(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchAccordion = function(e) {
  console.log("triggered");
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();