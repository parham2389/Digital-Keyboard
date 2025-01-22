const $ = document
//! Elements
const typeInput = $.querySelector(".title")
const typeTrack = $.querySelector("#type-track")
typeTrack.playbackRate = 2
//! Functions
function keypressHandler(event) {
    appendToDom(event.key)
    let eventKey = event.key.toUpperCase()
    const key = $.getElementById(eventKey)
    //* Animation & Type Track
    key.classList.add("hit")
    typeTrack.play()
    key.addEventListener("animationend", function () {
        key.classList.remove("hit")
        typeTrack.pause()
        typeTrack.currentTime = 0
    })
}
function appendToDom(event) {
    if (event == "Backspace") {
        typeInput.innerHTML = typeInput.innerHTML.slice(0, -1)
        return 
    } 
    typeInput.innerHTML += event 
}

//! Codes 
$.body.addEventListener("keydown", keypressHandler)
