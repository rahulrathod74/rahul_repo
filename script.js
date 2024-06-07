const yesButton=document.getElementById("yes");
const noButton=document.getElementById("no");
const button_div=document.querySelector("#button")
const ans=document.getElementById('ans')

noButton.addEventListener("click", () => {
        ans.innerText="Yes"
})
yesButton.addEventListener("click", () => {
    ans.innerText="Yes"
    
})