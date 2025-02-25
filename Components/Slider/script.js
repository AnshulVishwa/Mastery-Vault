const slides = document.querySelector(".slides");

slides.addEventListener( "scroll" , (e) => {
    console.log("width " , e.target.scrollWidth , "now " , e.target.scrollLeft+e.target.clientWidth)
    if( e.target.scrollWidth == e.target.scrollLeft+e.target.clientWidth ){
        e.target.scrollLeft = 0
    }
} )