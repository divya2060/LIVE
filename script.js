var side =document.querySelector('.sidebar');
side.addEventListener('click',()=>{
    document.querySelector('nav').classList.toggle('nav');
    document.querySelector('.title').classList.toggle('title1');
    document.querySelector('.navbar').classList.toggle('navbar1');
})
var slides = document.querySelectorAll('.slide');
var counter = 0;
slides.forEach((slide,i)=>{
    slide.style.left= `${i*100}%`;
    })

const slideImage = () =>{
slides.forEach(
    (slide) =>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    }
 
)
}
function goNext(){
  
    if(counter ==  slides.length-1){
        counter = 0;
        slideImage()
    }
    else{
        counter++;
        slideImage();
    }
   
}
function goPrev(){
    if(counter == 0){
        counter = slides.length-1;
        slideImage()
    }
    else{
        counter--;
        slideImage();
    }
   
}

