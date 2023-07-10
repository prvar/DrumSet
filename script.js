crash = new Audio("crash.mp3");
kick = new Audio("kick-bass.mp3");
snare = new Audio("snare.mp3");
tom1 = new Audio("tom-1.mp3");
tom2 = new Audio("tom-2.mp3");
tom3 = new Audio("tom-3.mp3");
tom4 = new Audio("tom-4.mp3");

var nod = document.querySelectorAll(".button").length;

for(var i=0; i<nod; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function() {
        var buttonStyle = this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
  });


function animation(currentKey) {
    var activeDivision = document.querySelector("." + currentKey);
    
    activeDivision.classList.add("playing");
    
    setTimeout(function() {
      activeDivision.classList.remove("playing");
    }, 200);
}


function sound(key) {
    switch (key) {
      case "w":
        crash.play();
        break;
    
      case "a":
        kick.play();
        break;
    
      case "s":
        snare.play();
        break;
    
      case "d":
        tom1.play();
        break;
    
      case "j":
        tom2.play();
        break;
    
      case "k":
        tom3.play();
        break;

      case "l":
        tom4.play();
        break;
    }
}