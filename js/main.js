// about section toggle event
const columns = document.querySelectorAll(".about__column__section");

columns.forEach(column => {
    column.addEventListener("click", () => {
        column.classList.toggle("about__column__section--show");
    })
})
//

// achievements section value counter 

const achiValues = document.querySelectorAll(".achievements__column__value");
const achiPos = document.querySelector(".achievements").offsetTop;
let flag = true;

window.addEventListener("scroll", () => {
    let clientY = window.scrollY;

    if (clientY >= achiPos - 200 && flag == true) {

        for (let i = 0; i < achiValues.length; i++) {
            let baseNumber = 0;
            const randNumber = Math.floor(Math.random() * 150 + 50);

            setInterval(() => {
                if (baseNumber < randNumber) {
                    baseNumber += Math.floor(Math.random() + 1);
                    achiValues[i].textContent = baseNumber;
                    flag = false;
                }
            }, 35)
        }
    }
})
//

// subscription activation

const subscribeBtn = document.querySelector(".footer__subscribe__input__icon");
subscribeBtn.addEventListener("click", () => {
    subscribeBtn.classList.add("btn--ok");
    document.querySelector("#subInput").value = "";
    setTimeout(() => subscribeBtn.classList.remove("btn--ok"), 2000)
});

//




// 
const aboutBars = document.querySelectorAll(".about__progress__item__bar");
const aboutPos = document.querySelector(".about").offsetTop;
const aboutTxt = document.querySelectorAll(".about__progress__item__txt span")
let flagAbout = true;

window.addEventListener("scroll", () => {
    let clientY = window.scrollY;

    if (clientY >= aboutPos - 200 && flagAbout == true) {

        for (let i = 0; i < aboutBars.length; i++) {
            let baseNumber = 0;
            const randNumber = Math.floor(Math.random() * 50 + 50);

            setInterval(() => {
                if (baseNumber < randNumber) {
                    baseNumber += Math.floor(Math.random() + 1);
                    aboutBars[i].style.width = `${baseNumber}%`;
                    aboutTxt[i].textContent = `${baseNumber} %`;
                    flagAbout = false;
                }
            }, 40)
        }
    }
})