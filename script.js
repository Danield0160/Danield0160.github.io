

let nav = document.getElementsByTagName("nav")[0].children[0]
let cursos = document.getElementById("cursos")
function detect_scroll() {
    const y = window.scrollY;
    if(y<50){
        nav.classList.remove("scrolled")
    }else{
        nav.classList.add("scrolled")
    }

    if(y>250){
        cursos.classList.add("scrolled")
    }else{
        cursos.classList.remove("scrolled")
    }


    console.log(y)


}
window.addEventListener('scroll',detect_scroll,false);



let scale = window.innerWidth
let svgs = [...document.querySelectorAll("#main svg")]

svgs.forEach((ele,indx,arr)=>{
    let i = 0
    setInterval(() => {

        i = i+1;
        let value = ((i/6)*((indx+1)*0.25)) - 200
        ele.style.transform = `translateX(${value}px `
        if (value >= window.innerWidth/3){
            i = window.innerWidth * -1.3;
        }

    }, 1);

})




const carousels = [...document.getElementsByClassName("image_carousel")]

carousels.forEach(carousel => {

    const slides = [...carousel.children]

    if (slides.length <= 1) {
        slides[0].classList.add("selected")
        return
    }

    let index = 0
    slides[index].classList.add("selected")

    const btnIzq = document.createElement("button")
    btnIzq.innerText = "<"
    btnIzq.classList.add("carousel_button_izq")

    btnIzq.onclick = () => {
        if (index === 0) return
        slides[index].classList.remove("selected")
        index--
        slides[index].classList.add("selected")
    }

    const btnDer = document.createElement("button")
    btnDer.innerText = ">"
    btnDer.classList.add("carousel_button_der")

    btnDer.onclick = () => {
        if (index === slides.length - 1) return
        slides[index].classList.remove("selected")
        index++
        slides[index].classList.add("selected")
    }

    carousel.appendChild(btnIzq)
    carousel.appendChild(btnDer)
})
