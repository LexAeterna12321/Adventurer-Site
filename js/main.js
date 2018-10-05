// about section toggle event
const columns = document.querySelectorAll(".about__column__section");

columns.forEach(column => {
    column.addEventListener("click", () => {
        column.classList.toggle("about__column__section--show");
    })
})
//