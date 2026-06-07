/* ========================= */
/* ELEMENTS */
/* ========================= */

const loginPage =
document.getElementById("loginPage");

const signupPage =
document.getElementById("signupPage");

const showSignup =
document.getElementById("showSignup");

const showLogin =
document.getElementById("showLogin");

const enterButton =
document.getElementById("enterButton");

const overlay =
document.getElementById(
"constellationOverlay"
);

const book =
document.getElementById(
"bookContainer"
);

/* ========================= */
/* PAGE SWITCHING */
/* ========================= */


/* ========================= */
/* CONSTELLATION */
/* ========================= */

function startConstellation(){

overlay.style.opacity = "1";

const stars =
document.querySelectorAll(".star");


/* STAR POSITIONS */

const positions = [

{ x:20 , y:25 },
{ x:45 , y:18 },
{ x:70 , y:30 },
{ x:30 , y:55 },
{ x:60 , y:60 },
{ x:48 , y:78 }

];

stars.forEach((star,index)=>{

star.style.left =
positions[index].x + "%";

star.style.top =
positions[index].y + "%";

star.animate(
[
{
opacity:0,
transform:"scale(0)"
},
{
opacity:1,
transform:"scale(1)"
}
],
{
duration:600,
delay:index*150,
fill:"forwards"
}
);

});

/* DRAW LINES */

/* MAGIC PORTAL */

setTimeout(() => {

stars.forEach((star) => {

star.animate(
[
{
transform:"translate(0,0) scale(1)"
},
{
transform:"translate(-50vw,-50vh) scale(0)"
}
],
{
duration:1200,
fill:"forwards"
}
);

});

book.animate(
[
{
filter:"brightness(1)"
},
{
filter:"brightness(2.5)"
}
],
{
duration:1200,
fill:"forwards"
}
);

},1200);
  
/* REDIRECT */

setTimeout(() => {

window.location.href =
"home.html";

},2500);

}

/* ========================= */
/* EVENTS */
/* ========================= */

showSignup.addEventListener(
"click",
turnToSignup
);

showLogin.addEventListener(
"click",
turnToLogin
);

let isEntering = false;
enterButton.addEvenListener("click",()=>{
  if(isEntering) return;

  const email = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password').value;

                                          if(!email || !password){
    alert("Fill the archive gates first");
  }
  isEntering = true;
  start constellation

/* ========================= */
/* STARTUP EFFECT */
/* ========================= */

window.addEventListener(
"load",
()=>{

book.animate(
[
{
opacity:0,
transform:
"translateY(30px)"
},
{
opacity:1,
transform:
"translateY(0)"
}
],
{
duration:1200,
easing:"ease-out"
}
);

}
);
