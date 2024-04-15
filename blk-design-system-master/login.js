const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));

document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const tasksContainer = document.querySelector(".tasks");
    const nextButton = document.getElementById("nextButton");
    const prevButton = document.getElementById("prevButton");

    // Add click event listener to "Next" button
    nextButton.addEventListener("click", function () {
        // Scroll the tasks container by 200 pixels horizontally to the right
        tasksContainer.scrollBy(200, 0);
    });

    // Add click event listener to "Previous" button
    prevButton.addEventListener("click", function () {
        // Scroll the tasks container by -200 pixels horizontally to the left
        tasksContainer.scrollBy(-200, 0);
    });
});
