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
