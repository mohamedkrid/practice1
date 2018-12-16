/*global console*/
var slider = document.getElementsByClassName('slider')[0] ;
var height1 = window.innerHeight ;
var width = window.innerWidth ;
slider.style.height = height1 +'px';
document.getElementById('video').style.height = slider.style.height ; 
document.getElementsByClassName('gallery')[0].style.height = slider.style.height ;
document.getElementsByClassName('cont-work')[0].style.height = slider.style.height ;
document.getElementsByClassName('cont-work')[0].style.width  = window.innerWidth +'px' ; 
document.getElementsByClassName('map')[0].style.height = slider.style.height ;
  var contwork = document.getElementsByClassName('cont-work')[0] ;
  var  gallery = document.getElementsByClassName('gallery')[0] ;
function scrollauto (event) {
     'use strict' ;

    var  x = 0 , y = 0   ;
   
     x = event.pageX;
     y = event.pageY ;
     console.log(x , y ) ; 
     if (x < 800) {
        contwork.scrollLeft += 10 ;
        
     } else if (x > 800) {
        contwork.scrollLeft -= 10 ;
     }
}

contwork.addEventListener("mousemove", scrollauto , false);
contwork.addEventListener("mouseenter", scrollauto , false);
contwork.addEventListener("mouseleave", scrollauto , false);
