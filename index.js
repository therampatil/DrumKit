var numOfDrum = document.querySelectorAll(".drum").length;
var i = 0;

while (i < numOfDrum) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function clickedMe() {
        switch (this.innerHTML) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play(); 
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play(); 
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play(); 
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play(); 
                break;
            case "j":
                var audio = new Audio("sounds/crash.mp3");
                audio.play(); 
                break;
            case "k":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play(); 
                break;
            case "l":
                var audio = new Audio("sounds/snare.mp3");
                audio.play(); 
                break;
            default:(console.log(this.innerHTML))
                break;
        }
        buttonAnimation(this.innerHTML)
    });
    i++;
}
document.addEventListener("keydown", function(event) {
    switch (event.key) {  // Use event.key to get the key pressed
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play(); 
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play(); 
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play(); 
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play(); 
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play(); 
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play(); 
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play(); 
            break;
        default:
            console.log();  // Log the key if it's not recognized
            break;
    }
    buttonAnimation(event.key)
});

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed")
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}
function cases(){
    
}