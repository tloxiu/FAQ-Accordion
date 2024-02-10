const iconOne = document.getElementById("first-icon");
const iconTwo = document.getElementById("second-icon");
const iconThree = document.getElementById("third-icon");
const iconFour = document.getElementById("fourth-icon");
const textOne = document.getElementById("first-text");
const textTwo = document.getElementById("second-text");
const textThree = document.getElementById("third-text");
const textFour = document.getElementById("fourth-text");
const headingOne = document.getElementById("first-h2");
const headingTwo = document.getElementById("second-h2");
const headingThree = document.getElementById("third-h2");
const headingFour = document.getElementById("fourth-h2");

headingOne.addEventListener("click", function(){
    if(textOne.classList.contains("close"))
    {
        textOne.classList.remove("close"); 
        textOne.classList.add("open");
        iconOne.src="assets/icon-minus.svg";
    }
    else
    {
        textOne.classList.remove("open");
        textOne.classList.add("close");
        iconOne.src="assets/icon-plus.svg";
    }
});

headingTwo.addEventListener("click", function(){
    if(textTwo.classList.contains("close"))
    {
        textTwo.classList.remove("close"); 
        textTwo.classList.add("open");
        iconTwo.src="assets/icon-minus.svg";
    }
    else
    {
        textTwo.classList.remove("open");
        textTwo.classList.add("close");
        iconTwo.src="assets/icon-plus.svg";
    }
});

headingThree.addEventListener("click", function(){
    if(textThree.classList.contains("close"))
    {
        textThree.classList.remove("close"); 
        textThree.classList.add("open");
        iconThree.src="assets/icon-minus.svg";
    }
    else
    {
        textThree.classList.remove("open");
        textThree.classList.add("close");
        iconThree.src="assets/icon-plus.svg";
    }
});

headingFour.addEventListener("click", function(){
    if(textFour.classList.contains("close"))
    {
        textFour.classList.remove("close"); 
        textFour.classList.add("open");
        iconFour.src="assets/icon-minus.svg";
    }
    else
    {
        textFour.classList.remove("open");
        textFour.classList.add("close");
        iconFour.src="assets/icon-plus.svg";
    }
});



iconOne.addEventListener("click", function(){
    if(textOne.classList.contains("close"))
    {
        textOne.classList.remove("close"); 
        textOne.classList.add("open");
        iconOne.src="assets/icon-minus.svg";
    }
    else
    {
        textOne.classList.remove("open");
        textOne.classList.add("close");
        iconOne.src="assets/icon-plus.svg";
    }
});

iconTwo.addEventListener("click", function(){
    if(textTwo.classList.contains("close"))
    {
        textTwo.classList.remove("close"); 
        textTwo.classList.add("open");
        iconTwo.src="assets/icon-minus.svg";
    }
    else
    {
        textTwo.classList.remove("open");
        textTwo.classList.add("close");
        iconTwo.src="assets/icon-plus.svg";
    }
});

iconThree.addEventListener("click", function(){
    if(textThree.classList.contains("close"))
    {
        textThree.classList.remove("close"); 
        textThree.classList.add("open");
        iconThree.src="assets/icon-minus.svg";
    }
    else
    {
        textThree.classList.remove("open");
        textThree.classList.add("close");
        iconThree.src="assets/icon-plus.svg";
    }
});

iconFour.addEventListener("click", function(){
    if(textFour.classList.contains("close"))
    {
        textFour.classList.remove("close"); 
        textFour.classList.add("open");
        iconFour.src="assets/icon-minus.svg";
    }
    else
    {
        textFour.classList.remove("open");
        textFour.classList.add("close");
        iconFour.src="assets/icon-plus.svg";
    }
});



 