const arrLeft = document.querySelector(".slider_nav-left");
const arrRight = document.querySelector(".slider_nav-right");
const slideNum = document.querySelector(".slider_nav-number");
const slider1 = document.querySelector(".slider-1");
const slider2 = document.querySelector(".slider-2");



arrLeft.onclick = arrLeftSlide = () => {
    if (slideNum.innerHTML == "01") {
        slideNum.innerHTML = "02";
        slider2.classList.add("slide-on");
        slider2.classList.remove("slide-off");
        slider1.classList.add("slide-off");
        slider1.classList.remove("slide-on");
    }
    else if (slideNum.innerHTML == "02") {
        slideNum.innerHTML = "01";
        slider2.classList.remove("slide-on");
        slider2.classList.add("slide-off");
        slider1.classList.remove("slide-off");
        slider1.classList.add("slide-on");
    }
};
arrRight.onclick = arrRightSlide = () => {
    if (slideNum.innerHTML == "01") {
        slideNum.innerHTML = "02";
        slider2.classList.add("slide-on");
        slider2.classList.remove("slide-off");
        slider1.classList.add("slide-off");
        slider1.classList.remove("slide-on");
    }
    else if (slideNum.innerHTML == "02") {
        slideNum.innerHTML = "01";
        slider2.classList.remove("slide-on");
        slider2.classList.add("slide-off");
        slider1.classList.remove("slide-off");
        slider1.classList.add("slide-on");
    }
};

