const loginSide =
document.querySelector(".login-side");

const signupSide =
document.querySelector(".signup-side");

const showSignup =
document.getElementById("showSignup");

const showLogin =
document.getElementById("showLogin");

showSignup.addEventListener("click", () => {

loginSide.classList.remove("active");

setTimeout(() => {

signupSide.classList.add("active");

},150);

});

showLogin.addEventListener("click", () => {

signupSide.classList.remove("active");

setTimeout(() => {

loginSide.classList.add("active");

},150);

});

document
.getElementById("loginBtn")
.addEventListener("click", () => {

const card =
document.querySelector(".book-card");

card.animate(
[
{
transform:"scale(1)"
},
{
transform:"scale(1.03)"
},
{
transform:"scale(0.96)",
opacity:.5
},
{
transform:"scale(20)",
opacity:0
}
],
{
duration:1400,
easing:"ease-in-out"
}
);

setTimeout(() => {

window.location.href =
"home.html";

},1300);

});
