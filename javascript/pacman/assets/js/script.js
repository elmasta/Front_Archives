console.log("script connected")
const pacman = document.getElementById("pacman");
function beep(){
    let son = new Audio("assets/sound/VEHHorn_Klaxon oogah 2 (ID 2541)_LS.mp3")
    son.play();
}

document.body.addEventListener("keyup", function(event){
    console.dir(event.key);
    switch(event.key){
        case "s":
            if(pacman.offsetTop !== 650){
                pacman.style.top = pacman.offsetTop + 50 + "px";
            } else {
                beep();
            }
            break;
        case "z":
            if(pacman.offsetTop !== 0){
                pacman.style.top = pacman.offsetTop - 50 + "px";
            } else {
                beep();
            }
            break;
        case "q":
            if(pacman.offsetLeft !== 0){
                pacman.style.left = pacman.offsetLeft - 50 + "px";
            } else {
                beep();
            }
            break;
        case "d":
            if(pacman.offsetLeft !== 350){
                pacman.style.left = pacman.offsetLeft + 50 + "px";
            } else {
                beep();
            }
            break;
        default:
            break    
    };
    // console.dir(pacman)
})