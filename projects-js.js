let expandBtn = document.querySelectorAll(".expand");
let wrappers = document.querySelectorAll(".hover-wrapper");
let clickedDecision = 0;


let expandFunction = function(index) {

    if (clickedDecision % 2 == 0) {
        for (let i = 0; i < wrappers.length; i++) {
            if (i != index) {
                wrappers[i].style.display = "none";
            }
        }
        wrappers[index].classList.replace("hover-wrapper", "another");
        expandBtn[index].textContent = "Exit";
        clickedDecision ++;

    } else {
        wrappers[index].classList.replace("another", "hover-wrapper");

        for (let i = 0; i < wrappers.length; i++) {
            if (i != index) {
                wrappers[i].style.display = "block";
            }
        }
        expandBtn[index].textContent = "See more";
        clickedDecision ++;
    }

}