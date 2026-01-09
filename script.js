// const suelo = document.querySelector('#suelo');
// // suelo.style.transformOrigin = `0vh 50vh 25vh`;


// //! lo mismo para el grado maximo
// const heightMap = {
//     2160: 2,
//     1440: 2.3,
//     1080: 2.55,
//     900:  2.65,
//     800:  5,
//     600:  5
// };

// function getClosestValue(map, currentHeight) {
//     let closestKey = null;
//     let smallestDiff = Infinity;

//     for (const key in map) {
//         const diff = Math.abs(currentHeight - Number(key));

//         if (diff < smallestDiff) {
//         smallestDiff = diff;
//         closestKey = key;
//         }
//     }

//     return map[closestKey];   
// }
// const value_speed = getClosestValue(heightMap, window.screen.height);


// // let rango_min = 1.5
// // let valor_min = 2160
// // let rango_max = 2.8
// // let valor_max = 600

// // const value_speed = //2.2
// //     rango_min +
// //     (valor_min - window.screen.height) *
// //     (rango_max - rango_min) /
// //     (valor_min - valor_max);
// // console.log(value_speed)


let nav = document.getElementsByTagName("nav")[0].children[0]
function detect_scroll() {
    const y = window.scrollY;
    if(y<50){
        nav.classList.remove("scrolled")
    }else{
        nav.classList.add("scrolled")
    }
    console.log(y)
}
window.addEventListener('scroll',detect_scroll,false);






// // // When the user scrolls down 50px from the top of the document, resize the header's font size
// // window.onscroll = function() {scrollFunction()};
// // header = document.getElementsByTagName("header")[0]
// // function scrollFunction() {
// //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
// //         header.style.height = "50px";
// //     } else {
// //         header.style.height = "100vh";
// //     }
// // }