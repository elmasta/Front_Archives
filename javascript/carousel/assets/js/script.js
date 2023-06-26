console.log("connected");
const slider = document.querySelector("#slider>img");
const image = [
    "/assets/img/coverDeadPrez.jpg",
    "/assets/img/coverPharcyde.jpg",
    "/assets/img/coverSoulOf.jpg"
];

let i = 0;
setInterval(function(){
    let imageHTML = slider;
    imageHTML.src = image[i];
    console.log(imageHTML.src)
    if(i === image.length - 1){
        i = 0;
    } else {
        i++; 
    }
}, 5000)

// while(i < image.length){
//     let newImage = document.createElement("img");
//     newImage.src = image[i];
//     diaporama.append(newImage);
//     i++;
//     // break
// }