

let getSlidesBasket = document.querySelectorAll(".slide-basket");
let getSlidesFood = document.querySelectorAll(".slide-food");
let getFoodDesc = document.querySelectorAll(".food-desc");
let getSlidesSki = document.querySelectorAll(".slide-ski");
let getSlidesTravel = document.querySelectorAll(".slide-travel");
let getTravelDesc = document.querySelectorAll(".travel-desc");

let indexBasket = 0;
let indexFood = 0;
let indexSki = 0;
let indexTravel = 0;

getSlidesBasket[0].style.display = "block";

getSlidesFood[0].style.display = "block";
getFoodDesc[0].style.display = "block";

getSlidesSki[0].style.display = "block";

getSlidesTravel[0].style.display = "block";
getTravelDesc[0].style.display = "block";

console.log(getSlidesTravel);



// functie care imi intoarce indexul in functie de prev sau next
// si categoria de slide-uri din care face parte
let getIndexFunction = function(index, scrollOrientation, getSlides) {
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


let scrollFunction = function(scrollOrientation, slidesName) {
    let getSlides;
    let index;

    // setez slide-urile care trebuie scroluite,
    // si descrierea lor la food si travel
    if (slidesName == "basket") {
        getSlides = getSlidesBasket;
        index = indexBasket;
    } else if (slidesName == "food") {
        getSlides = getSlidesFood;
        index = indexFood;
        getFoodDesc[index].style.display = "none";
    } else if (slidesName == "ski") {
        getSlides = getSlidesSki;
        index = indexSki;
    } else if (slidesName == "travel") {
        getSlides = getSlidesTravel;
        index = indexTravel;
        getTravelDesc[index].style.display = "none";
    }

    // aflu noul index, apoi setez display block la slides,
    // si la descriere unde e cazul
    getSlides[index].style.display = "none";
    let newIndex = getIndexFunction(index, scrollOrientation, getSlides);

    index = newIndex;
    getSlides[index].style.display = "block";

    if (slidesName == "food") {
        getFoodDesc[index].style.display = "block";
    } else if (slidesName == "travel") {
        getTravelDesc[index].style.display = "block";
    }

    if (slidesName == "basket") {
        indexBasket = newIndex;
    } else if (slidesName == "food") {
        indexFood = newIndex;
    } else if (slidesName == "ski") {
        indexSki = newIndex;
    } else if (slidesName == "travel") {
        indexTravel = newIndex;
    }

}