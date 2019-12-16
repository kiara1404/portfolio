/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/


var hamburger = document.querySelector('.burger');
var nav = document.querySelector('.nav-links');

hamburger.addEventListener('click', function(){
    nav.classList.toggle('nav-active');
});

