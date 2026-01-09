

let nav = document.getElementsByTagName("nav")[0].children[0]
let cursos = document.getElementById("cursos")
function detect_scroll() {
    const y = window.scrollY;
    if(y<50){
        nav.classList.remove("scrolled")
    }else{
        nav.classList.add("scrolled")
    }

    if(y>75){
        cursos.classList.add("scrolled")
    }else{
        cursos.classList.remove("scrolled")
    }


    // let svgs = [...document.querySelectorAll("#main svg")]
    // svgs.forEach((ele, indx, arr)=>{
    //     ele.style.transform = `translateX(${((y/6)*(indx+1)) - 200}px)`

    // })
    


}
window.addEventListener('scroll',detect_scroll,false);


// let svgs = [...document.querySelectorAll("#main svg")]
// let i = 0
// let m = window.innerWidth 

// setInterval(() => {
//     i = i+1;
//     svgs.forEach((ele, indx, arr)=>{
//         ele.style.transform = `translateX(${((i/6)*(indx+1)) - 200}px)`
//     })

// }, 10);

let scale = window.innerWidth
let svgs = [...document.querySelectorAll("#main svg")]

svgs.forEach((ele,indx,arr)=>{
    let i = 0
    setInterval(() => {

        i = i+1;
        let value = ((i/6)*((indx+1)*0.25)) - 200
        ele.style.transform = `translateX(${value}px)`
        if (value >= window.innerWidth/3){
            i = window.innerWidth * -1;
        }

    }, 1);

})