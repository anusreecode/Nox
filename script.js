const flipCard = document.getElementById("flipCard");

document.getElementById("showSignup")
.addEventListener("click", () => {
flipCard.classList.add("flip");
});

document.getElementById("showLogin")
.addEventListener("click", () => {
flipCard.classList.remove("flip");
});

document.getElementById("loginBtn")
.addEventListener("click", () => {

const container =
document.getElementById("doorContainer");

container.classList.add("door-open");

setTimeout(() => {

document.getElementById("homePage")
.style.opacity = "1";

document.getElementById("homePage")
.style.pointerEvents = "all";

},800);

});
