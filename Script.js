const submitButton = document.querySelector("#submitButton")
const mainBody = document.querySelector("#mainBody")
const submissionPart = document.querySelector("#submissionPart")
 const buttonSelect = document.querySelectorAll("#rat1, #rat2, #rat3, #rat4, #rat5")

const notReload = (e)=>{
    e.preventDefault()
}

let selectedButton = null

const RatingStyle = (e)=>{
    const button = e.target
    
    if(selectedButton){
        selectedButton.style.backgroundColor = ""
        selectedButton.style.color=""
    }

    button.style.backgroundColor = "hsl(216, 12%, 54%)"
    button.style.color = "white"

    selectedButton = button
    
}

buttonSelect.forEach((div)=>{
    div.addEventListener("click",RatingStyle)
})





submitButton.addEventListener("click",()=>{
    mainBody.style.display="none"
    submissionPart.style.display="block"

})
submissionPart.style.display="none"




