function loading() {
  var tl = gsap.timeline();

  tl.to(".yellow1", {
    top: "-100%",
    delay: "0.5",
    duration: 0.6,
    ease: "expo.out",
  });
  tl.from(
    ".yellow2",
    {
      top: "100%",
      delay: "0.5",
      duration: 0.5,
      ease: "expo.out",
    },
    "a"
  );
  tl.to(
    "#main-text",
    {
      color: "black",
      delay: 0.6,
      duration: 0.5,
    },
    "a"
  );
  tl.to("#loader", {
    opacity:0,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loading()

var page2 = document.querySelector("#page2")
var page3 = document.querySelector("#page3")
var nav = document.querySelector(".nav");
var svg = document.querySelector(".core-logo")

// logic to create responsive navbar

const icon = document.querySelector("#nav-icon");
const home = document.querySelector(".home")
const projects = document.querySelector(".projects")
const studies = document.querySelector(".studies")

const navbody = document.querySelector(".nav-body");
const navbottom = document.querySelector(".nav-bottom")

let arr = [projects,home,studies]

arr.map((elem)=>{
  elem.addEventListener("click", ()=>{
    navbody.classList.toggle('none');
    navbottom.classList.toggle('none');
  })
})

icon.addEventListener("click", ()=>{
  nav.style.color = '#000'; 
  svg.style.fill = "#000";
  navbody.classList.toggle('none');
  navbottom.classList.toggle('none');
})


// scroll effect

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector(".footer h2").addEventListener("click",()=>{
  scroll.scrollTo(0);
})

//scrolling effect for portrait

document.querySelector("#home").addEventListener("click",()=>{
  scroll.scrollTo(0);
})

document.querySelector("#projects").addEventListener("click",()=>{
  scroll.scrollTo(page2);
})

document.querySelector("#studies").addEventListener("click",()=>{
  scroll.scrollTo(page3);
})

//scrolling effect for landscape 

document.querySelector(".nav-home").addEventListener("click",()=>{
  scroll.scrollTo(0);
})
document.querySelector(".nav-projects").addEventListener("click",()=>{
  scroll.scrollTo(page2);
})
document.querySelector(".nav-studies").addEventListener("click",()=>{
  scroll.scrollTo(page3);
})

var elems = document.querySelectorAll(".elem")

elems.forEach(function(ele){
  ele.addEventListener("mouseenter",function(){
    var bgimg = ele.getAttribute("data-img")
    page2.style.backgroundImage = `url(${bgimg})`
  })
})

//changing color of navbar when entered in page 2


scroll.on('scroll', (instance) => {
  const page2Top = page2.getBoundingClientRect().top +  window.scrollY ;
  const page2Bottom = page2Top + page2.offsetHeight ;

  if ( page2Top<=30 && page2Bottom>=80) {
      nav.style.color = '#ffff';
      svg.style.fill = "#fff";
  } else {
      nav.style.color = '#000'; 
      svg.style.fill = "#000";
  }
});



