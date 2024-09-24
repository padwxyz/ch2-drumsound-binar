// document.querySelector("button").addEventListener("click", () => handleClick("anjay"));

// function handleClick(greeting) {
//     alert(`hello cuy ${greeting}`)
// }

// handleClick();

// console.log(document.querySelectorAll("button")[6])

// array.length()
let totalButton = document.querySelectorAll("button").length;

function drumSound(key) {
    switch(key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    default:
    }
};

for(let i = 0; i < totalButton; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
         drumSound(this.innerHTML);
    });
};

for(let i = 0; i < totalButton; i++){
    document.querySelectorAll("button")[i].addEventListener("keypress", function(e) {
         drumSound(e.key);
    });
};