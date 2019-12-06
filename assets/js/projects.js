const clickedPage = document.getElementById("pagination")
const projectDoc = document.getElementById("projects-head")

displayHash = {"1": "one", "2": "two", "3": "three"}

clickedPage.addEventListener("click", (e) => {
    start = document.getElementById("start")
    end = document.getElementById("end")

    // (e.target.innerHTML === "1") ?
    //     // start.className = "page disabled start" : start.className = "page start"
    //     console.log("left") : console.log("right")
    if (e.target.innerHTML === "1") {
        start.className = "button disabled start"
    } else {
        start.className = "button start"
    }

    if (e.target.innerHTML === "3") {
        end.className = "button disabled end"
    } else {
        end.className = "button end"
    }


    previous = clickedPage.querySelector(".active")
    prevImgId = displayHash[`${previous.innerHTML}`]
    prevImg = projectDoc.querySelector(`.${prevImgId}`)

    previous.classList.remove("active")
    prevImg.parentNode.classList.remove("revealed")
    prevImg.parentNode.classList.add("concealed")

    // if (e.target.innerHTML === "Next") {
    //     targetImgId = displayHash[`${e.target.innerHTML}`]
    //     targetImg = projectDoc.querySelector(`.${targetImgId}`)
    // }
    targetImgId = displayHash[`${e.target.innerHTML}`]
    targetImg = projectDoc.querySelector(`.${targetImgId}`)

    targetImg.parentNode.classList.remove("concealed")
    targetImg.parentNode.classList.add("revealed")
    e.target.classList.add("active")
})