const clickedPage = document.getElementById("pagination")
const projectDoc = document.getElementById("projects-head")
const test = projectDoc.querySelector("three")
console.log(!!test)

displayHash = {"1": "one", "2": "two", "3": "three"}

clickedPage.addEventListener("click", (e) => {
    previous = clickedPage.querySelector(".active")
    prevImgId = displayHash[`${previous.innerHTML}`]
    prevImg = projectDoc.querySelector(`.${prevImgId}`)

    previous.classList.remove("active")
    prevImg.parentNode.classList.remove("revealed")
    prevImg.parentNode.classList.add("concealed")

    targetImgId = displayHash[`${e.target.innerHTML}`]
    targetImg = projectDoc.querySelector(`.${targetImgId}`)

    targetImg.parentNode.classList.remove("concealed")
    targetImg.parentNode.classList.add("revealed")
    e.target.classList.add("active")

    if 
})