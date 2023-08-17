let profile = document.querySelector(".profile")
document.getElementById("profilebutton").addEventListener("click",(event)=>{
    event.preventDefault();
    profile.classList.add("view");
})
