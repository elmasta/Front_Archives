const test = document.getElementById("test");
console.log("oh hi mark");
test.style.backgroundColor = "yellow";
let nbStagiaire = 5;
let maBolean = true;

if (nbStagiaire <= 5){
    console.log("on est pas nombreux");
} else if(5 < nbStagiaire <= 9) {
    console.log("On est un peu plus nombreux")
} else {
    console.log("on est trop nombreux")
}

if(!maBolean){
    console.log(false)
}

test.addEventListener("mouseover", function(){
    test.style.backgroundColor = "green";
});
test.addEventListener("mouseout", function(){
    test.style.backgroundColor = "yellow";
});