

let getSlides = document.querySelectorAll(".slide");
let index = 0;
getSlides[0].style.display = "block";
console.log(getSlides);


// functie care imi intoarce indexul in functie de prev sau next
let getIndexFunction = function(index, scrollOrientation) {

    if (scrollOrientation == 0) {
        if (index == getSlides.length - 1) {
            return 0;
        } else {
            return index + 1;
        }
    } else {
        if (index == 0) {
            return getSlides.length - 1;
        } else {
            return index - 1;
        }
    }
    
}


let scrollFunction = function(scrollOrientation) {
    console.log("vechiul  " + index);
    getSlides[index].style.display = "none";
    let newIndex = getIndexFunction(index, scrollOrientation);
    index = newIndex;
    getSlides[index].style.display = "block";
    console.log("noul "  + index);
}