const container =
document.querySelector(".forms-container");

const showSignup =
document.getElementById("showSignup");

const showLogin =
document.getElementById("showLogin");

showSignup.addEventListener("click",()=>{

container.classList.add("active");

});

showLogin.addEventListener("click",()=>{

container.classList.remove("active");

});
