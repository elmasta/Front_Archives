let navigation = document.querySelector("nav");
let navLink = document.getElementsByClassName("navLink");
let currentScroll;

document.addEventListener("scroll", function(e){
    currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScroll >= 350){
        navigation.style.backgroundColor = "white";
        navigation.style.boxShadow = "0px 0px 5px #3F3F3F";
        Array.prototype.forEach.call(navLink, function(el) {
            el.style.color = "black";
        });
        // for(item in a.navLink){
        //     console.log(item)
        //     item.style.color = "black";
        // };
    } else if(currentScroll <= 349){
        navigation.style.backgroundColor = "transparent";
        navigation.style.boxShadow = "none";
        Array.prototype.forEach.call(navLink, function(el) {
            el.style.color = "#656565";
        });
    };
});