"use strict";

gsap.registerPlugin(ScrollTrigger);



const tl = gsap.timeline({
    scrollTrigger : {
        trigger: "#relojes",
        start: "top",
        end: "5000 100%",
        scrub: true,
        pin: true,
        toggleActions: "play reverse play reverse",      
        //markers: true
        
    }
});


tl.to('#texto-descripcion1', {opacity: 0, y: -100, duration: 1});
tl.to('#cont-imgs1', {opacity: 0, duration: 0.5}, '-=1');
tl.to('#span1, #span-titulo-claro1', {width: '0%', duration: 1}, '-=1.1');

tl.to('#span2, #span-titulo-claro2', {width: 'auto', duration: 1},'-=0.1')
.to('#cont-imgs2', {opacity: 1, duration: 2}, '-=1.4')
.to('#texto-descripcion2', {opacity: 1, y: 30, duration: 1}, '-=2.6')


tl.to('#cont-imgs2', {opacity: 0, duration: 1},'-=0.2')
.to('#texto-descripcion2', {opacity: 0, y: -100, duration: 1},'-=1')
.to('#span2, #span-titulo-claro2', {width: '0%', duration: 1},'-=1.3' );


tl.to('#span3, #span-titulo-claro3', {width: 'auto', duration: 2}, '-=0.3')
.to('#cont-imgs3', {opacity: 1, duration: 1}, '-=2')
.to('#texto-descripcion3', {opacity: 1, y: 0, duration: 1}, '-=2');

tl.to('#cont-imgs3', {opacity: 0, duration: 0.5})
.to('#texto-descripcion3', {opacity: 0, y: -100, duration: 0.5}, '-=0.5')
.to('#span3, #span-titulo-claro3', {width: '0%', duration: 0.5}, '-=0.5');


tl.to('#span4, #span-titulo-claro4', {width: 'auto', duration: 1})
.to('#cont-imgs4', {opacity: 1, duration: 1}, '-=1')
.to('#texto-descripcion4', {opacity: 1, y: 0, duration: 1},'-=1');




















//-------------------------- Contenedor del titulo principal -----------------------------

/* gsap.to("#cont-titulo",{
    //y: 1000,
    duration: 7,
    scrollTrigger: {
        trigger: "#cont-titulo",
        start: "top 15%",
        scrub: true,
        pin: true,
        action: "restart none none none",
        end: () => `+=${document.querySelector(".container").offsetHeight}`,
        markers: true
        
        
    },

});
 */
/// -------------------- Fila 1 -----------------------



/* const tl1 = gsap.timeline({
    scrollTrigger : {
        trigger: "#fila-relojes2",
        start: "top",
        end: "500 5%",
        scrub: true,
        pin: true,
        toggleActions: "play reverse play reverse",      
        markers: true
        
    }
}); */


/* gsap.to("#fila-relojes1",{
    //y: 1000,
    duration: 7,
    scrollTrigger: {
        trigger: "#fila-relojes1",
        start: () => `-=${document.querySelector("#cont-titulo").offsetHeight}`,
        scrub: true,
        pin: true,
        action: "restart none none none",
        end: () => `+=${document.querySelector("#fila-relojes1").offsetHeight}`,
        markers: true,
        
    },
}); */

/* tl.to('.imagen-fila-relojes1',{opacity: 1, duration: 100}).to('.imagen-fila-relojes1',{opacity: 0, duration: 100});

tl.to('#texto-descripcion1',{opacity: 1, duration: 1000}).to('#texto-descripcion1',{opacity: 0, duration: 1000})
.to('.span-titulo1',{width: 1}); */



/* gsap.to("#fila-relojes1",{
    //y: 1000,
    duration: 7,
    scrollTrigger: {
        trigger: "#fila-relojes1",
        start: () => `-=${document.querySelector("#cont-titulo").offsetHeight}`,
        scrub: true,
        pin: true,
        action: "restart none none none",
        end: () => `+=${document.querySelector("#fila-relojes1").offsetHeight}`,
        markers: true,
        
        
    },

}) */