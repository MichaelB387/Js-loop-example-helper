//const IMAGES using query selector to select all images
const IMAGES = document.querySelectorAll("img")

for (let i = 0; i <IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src")
    //will go to end of array and strip off last eight characters
    //eg original image was example-800.jpg now is just example
    imgSrc = imgSrc.slice(0,-8)
    console.log(imgSrc)

    let type = IMAGES[i].getAttribute("data-type")
    console.log(type)
}