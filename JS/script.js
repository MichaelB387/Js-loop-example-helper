//const IMAGES using query selector to select all images
const IMAGES = document.querySelectorAll("img")
const SIZES = {
    showcase: "100vw",
    reason: "(max-width: 799px) 100vw, 372px",
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px",
}

// allows to pass imgSrc through function then back through loop
function makeSrcSet(imgSrc) {
    let markup = []
    //smallest size for the image
    let width = 400

    for ( let i =0; i<5; i++) {
        // imgSrc is the stripped back URL from the loop below
        //This is generating url-400.jpg 400w
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w"
        //Loop will run through again up to 2000
        width += 400
    }
    //will return markup array as a comma seperated list
    return markup.join()

}

for (let i = 0; i <IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src")
    //will go to end of array and strip off last eight characters
    //eg original image was example-800.jpg now is just example
    imgSrc = imgSrc.slice(0,-8)
    let srcset = makeSrcSet(imgSrc)
    console.log(srcset)

    let type = IMAGES[i].getAttribute("data-type")
    //bracket notation
    let sizes = SIZES[type]
    console.log(sizes)
}

// now output is
// images/testimonials/zerog-400.jpg 400w,images/testimonials/zerog-800.jpg 800w,images/testimonials/zerog-1200.jpg 1200w,images/testimonials/zerog-1600.jpg 1600w,images/testimonials/zerog-2000.jpg 2000w