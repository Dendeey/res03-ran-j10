let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button2");
let leftblock = document.getElementsByClassName("LeftBlock");
let centerblock = document.getElementsByClassName("CenterBlock");
let rightblock = document.getElementsByClassName("RightBlock");

button1.addEventListener("click", function(){
    leftblock.classList.add("");
    centerblock.classList.remove("");
    rightblock.classList.add("");
});
