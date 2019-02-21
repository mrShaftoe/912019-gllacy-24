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

var slider = document.querySelector(".slider");
var buttons = slider.querySelectorAll(".slider-button");
var slides = slider.querySelectorAll(".slider-item");
var body = document.querySelector("body");

function switchSlide(elems, index, attr) {
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].hasAttribute(attr)) {
            elems[i].removeAttribute(attr);
        }
    }
    elems[index].setAttribute(attr, true);
}

function switchSlideImage(item, pattern, index) {
    var itemClasses = item.classList;
    for (var i = 0; i < itemClasses.length; i++) {
        if (~itemClasses[i].indexOf(pattern)) {
            itemClasses.remove(itemClasses[i]);
        }
    }
    itemClasses.add(pattern+index);
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(evt) {
        var index = parseInt(this.dataset.index, 10);
        switchSlide(buttons, index, "disabled");
        switchSlide(slides, index, "data-active");
        switchSlideImage(body, "slide-", index+1);
    });
}