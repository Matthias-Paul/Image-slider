var next = document.querySelector("#next")
var previous = document.querySelector("#previous")
var show = document.querySelector("#show")

var counter = 0;

next.addEventListener("click", function(){
  show.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:800,fill:"forwards"})
  
  
  
  counter++;
  
  show.style.backgroundImage = `url(IMG-${counter}.jpg`
  
    if(counter === 19){
    counter = -1;
  }
  
})


previous.addEventListener("click", function(){
  
  show.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:800,fill:"forwards"})
  
  
        if(counter === 0){
    counter = 20;
  }
  
      
  counter--;
  show.style.backgroundImage = `url(IMG-${counter}.jpg`
  
    
  
  
})








