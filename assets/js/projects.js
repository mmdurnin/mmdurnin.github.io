const clickedPage = document.getElementById("pagination")

clickedPage.addEventListener("click", (e) => {
    previous = clickedPage.querySelector(".active")
    previous.classList.remove("active")
    e.target.classList.add("active")
})