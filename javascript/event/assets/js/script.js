var content = document.getElementById("content");
const message = document.getElementById("message");

// content.addEventListener("click", function(){
//     alert("coucou")
// })

let currentScroll;

document.addEventListener("scroll", function(e){
    // console.dir(e);
    currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScroll <= 999){
        content.style.backgroundColor = "aquamarine";
    } else if(currentScroll >= 1000 && currentScroll <= 1999){
        content.style.backgroundColor = "yellow";
    } else if(currentScroll >= 2000 && currentScroll <= 2999){
        content.style.backgroundColor = "brown";
    }
    if(currentScroll >= 3000 ){
        content.classList.toggle("transimage");
    }
    if(currentScroll >= 4000){
        console.log("ok");
        content.classList.toggle("transimage");
        message.classList.remove("transmessageLeave");
        message.classList.add("transmessageEnter");
    };
});