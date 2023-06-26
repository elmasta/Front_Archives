console.log("connected");
const diaporama = document.getElementById("diaporama");
const image = [
    "/assets/img/coverDeadPrez.jpg",
    "/assets/img/coverPharcyde.jpg",
    "/assets/img/coverSoulOf.jpg",
    "/assets/img/chef.jpg"
];
console.log(image.length);

// for(let i = 0; i < images.lenght; i++)

// for(element in image){
//     console.log(image[element]);
//     let newImage = document.createElement("img");
//     newImage.src = image[element];
//     diaporama.append(newImage);
// }

// let i = 0;
// while(i < image.length){
//     let newImage = document.createElement("img");
//     newImage.src = image[i];
//     diaporama.append(newImage);
//     i++;
//     // break
// }

image.forEach(element => {
    let newImage = document.createElement("img");
    newImage.src = element;
    diaporama.append(newImage);   
});