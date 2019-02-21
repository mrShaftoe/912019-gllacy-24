var popUpButton = document.querySelector(".write-us-button");
var writeUs = document.querySelector(".write-us");
var writeUsCloseButton = writeUs.querySelector(".button-close");

popUpButton.addEventListener("click",function (evt) {
    evt.preventDefault();
    writeUs.classList.add("modal-show");
});

writeUsCloseButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUs.classList.remove("modal-show");
});