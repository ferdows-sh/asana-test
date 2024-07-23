// second section
let btns = document.querySelectorAll(".btn")

let boxs = document.querySelectorAll(".box")
for(i=0 ; i<boxs.length-1; i++){
    btns.forEach((t)=>{
        t.addEventListener("click", ()=>{
        removeClass()
        t.classList.add("btn-clk")
        })  
    })
}
function showClass(){
    boxs.forEach((b)=>{
        b.classList.remove("Show")
    })
}

function removeClass(){
    btns.forEach((t)=>{    
        t.classList.remove("btn-clk")
    })
}


let btn1 = document.querySelector(".btn1") 
let btn2 = document.querySelector(".btn2") 
let btn3 = document.querySelector(".btn3") 
let btn4 = document.querySelector(".btn4") 
let btn5 = document.querySelector(".btn5") 

let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")
let box5 = document.querySelector(".box5")

btn1.addEventListener("click",()=>{
    showClass()
    box1.classList.add("Show")
})
btn2.addEventListener("click",()=>{
    showClass()
    box2.classList.add("Show")
})
btn3.addEventListener("click",()=>{
    showClass()
    box3.classList.add("Show")
})
btn4.addEventListener("click",()=>{
    showClass()
    box4.classList.add("Show")
})
btn5.addEventListener("click",()=>{
    showClass()
    box5.classList.add("Show")
})

// third section
let bg_box = document.querySelector(".third")

function colorChange(id){
    bg_box.style.background = document.getElementById(id).innerHTML
}


// black section
let question = document.querySelectorAll(".ques-contain")
let cardx = document.querySelectorAll(".cardx")

question.forEach((h)=>{
    h.addEventListener("click", ()=>{
        removeActiveClass()
        h.classList.add("active")
        let open = h.querySelector(".open")
        let close = h.querySelector(".close")
        let parent = h.closest(".cardx")
        let answer = parent.querySelector(".answer")

        if(h.classList.contains("active")){
            open.classList.remove("active")
            close.classList.add("active")
            answer.classList.add("active")
            
        }
    })
})

    function removeActiveClass(){
        question.forEach((t)=>{ 
            let open = t.querySelector(".open")
            let close = t.querySelector(".close")
            let parent = t.closest(".cardx")
            let answer = parent.querySelector(".answer")
    
            t.classList.remove("active")
            open.classList.add("active")
            close.classList.remove("active")
            answer.classList.remove("active")
        })
    }


question.forEach((h)=>{
    h.addEventListener("mouseup", ()=>{
        setInterval(()=> {
            removeActiveClass()
        h.classList.add("active")
        let open = h.querySelector(".open")
        let close = h.querySelector(".close")
        let parent = h.closest(".cardx")
        let answer = parent.querySelector(".answer")
        let bord =document.querySelector(".bord")

        

        if(h.classList.contains("active")){
            open.classList.remove("active")
            close.classList.add("active")
            answer.classList.add("active")
            
        }
    }, 8000)
        })
})

// black section image

let slideImage = 0
showImages()


function showImages() {
  let i;
  let images = document.querySelectorAll(".b-imag");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none"
  }
  slideImage++
  if (slideImage > images.length) {slideImage = 1}
  images[slideImage-1].style.display = "block"
  setTimeout(showImages, 1500)
}


let sc = document.querySelector(".black")
sc.addEventListener('scroll', changeImageBar())

function changeImageBar(){
setTimeout(()=>{
    let innerbord =document.querySelector(".innerbord")
        l = 0
        let palet = setInterval(() => {
            l+=20
            innerbord.style.width = l+"px"
            if(l>= 400)
            clearInterval(palet)
        }, 1500);
},0)

}


//  password

const password = document.getElementById('password');
const toggle = document.querySelector('.toggle');


function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        toggle.classList.add('hide');
    }else{
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide');
    }
}


// log in

let log_btn = document.getElementById("log-btn")
let log_bg = document.querySelector(".bg-log")
let exit = document.querySelector(".exit")
let confirm = document.querySelector(".log-btn")

log_btn.addEventListener("click", () => {
    log_bg.classList.remove("notShow")
    exit.addEventListener("click",()=>{
        log_bg.classList.add("notShow")
    })
    confirm.addEventListener("click",()=>{
        log_bg.classList.add("notShow")
    })
})


// sidebar

const sidebar = document.querySelector('.sidebar')
const side_btn = document.querySelector('.side-btn')

side_btn.addEventListener('click', function() {
    sidebar.classList.toggle('active')
    sidebar.style.visibility = 'visible'
})

// sidebar textarea
let text = document.querySelector("textarea")
let length = text.getAttribute("maxlength");
text.addEventListener("keyup" , function() {
    document.getElementById('count').innerHTML = text.value.length + "/" +length
})

// slider
let slideIndex = 1;

showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".card");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// progress header
const progress = document.querySelector('.progress-bar');

window.addEventListener('scroll', ()=>{
    const winScroll = window.pageYOffset
    const height = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = (winScroll/height) * 100
    progress.style.width = `${scrolled}%`
   
})

// loading
let parent_ = document.querySelector(".loading");
let circle = document.querySelector(".circle");
let squLe = document.querySelector(".left-sq");
let squRi = document.querySelector(".right-sq");

let up = -20;
let upper = setInterval(() => {
  up -= 20;
  squLe.style.top = up + "px";
  if (up <= -120) 
  clearInterval(upper);
}, 450);

let dow = -20;
setTimeout(() => {
  let down = setInterval(() => {
    dow -= 20;
    squRi.style.bottom = dow + "px";
    if (dow <= -120) 
    clearInterval(down);
  }, 220);
}, 3000);
setTimeout(()=>{
    const loader = document.querySelector('.loader');
    loader.classList.add("hidden")
},4000)




