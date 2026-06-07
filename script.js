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
/* PAGE TURN */
/* ========================= */

function turnToSignup(){

loginPage.style.pointerEvents = "none";

loginPage.animate(
[
{
transform:
"perspective(1200px) rotateY(0deg)",
opacity:1
},
{
transform:
"perspective(1200px) rotateY(-90deg)",
opacity:.25
}
],
{
duration:700,
easing:"ease-in-out",
fill:"forwards"
}
);

setTimeout(() => {

loginPage.classList.remove(
"active-page"
);

signupPage.classList.add(
"active-page"
);

signupPage.animate(
[
{
transform:
"perspective(1200px) rotateY(90deg)",
opacity:.25
},
{
transform:
"perspective(1200px) rotateY(0deg)",
opacity:1
}
],
{
duration:700,
easing:"ease-in-out"
}
);

},700);

}

/* ========================= */
/* BACK TO LOGIN */
/* ========================= */

function turnToLogin(){

signupPage.animate(
[
{
transform:
"perspective(1200px) rotateY(0deg)",
opacity:1
},
{
transform:
"perspective(1200px) rotateY(90deg)",
opacity:.25
}
],
{
duration:700,
easing:"ease-in-out",
fill:"forwards"
}
);

setTimeout(() => {

signupPage.classList.remove(
"active-page"
);

loginPage.classList.add(
"active-page"
);

loginPage.animate(
[
{
transform:
"perspective(1200px) rotateY(-90deg)",
opacity:.25
},
{
transform:
"perspective(1200px) rotateY(0deg)",
opacity:1
}
],
{
duration:700,
easing:"ease-in-out"
}
);

loginPage.style.pointerEvents =
"all";

},700);

}

/* ========================= */
/* CONSTELLATION */
/* ========================= */

function startConstellation(){

overlay.style.opacity = "1";

const stars =
document.querySelectorAll(".star");

const lines =
document.querySelectorAll(".line");

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

setTimeout(() => {

const lineData = [

{
x:20,
y:25,
length:110,
angle:-10
},

{
x:45,
y:18,
length:120,
angle:15
},

{
x:30,
y:55,
length:90,
angle:-25
},

{
x:60,
y:60,
length:90,
angle:40
},

{
x:30,
y:55,
length:140,
angle:8
}

];

lines.forEach((line,index)=>{

line.style.left =
lineData[index].x + "%";

line.style.top =
lineData[index].y + "%";

line.style.width =
lineData[index].length + "px";

line.style.transform =
`rotate(${lineData[index].angle}deg)`;

line.animate(
[
{
opacity:0,
width:"0px"
},
{
opacity:1,
width:
lineData[index].length + "px"
}
],
{
duration:700,
delay:index*150,
fill:"forwards"
}
);

});

},900);

/* PORTAL EFFECT */

setTimeout(() => {

book.animate(
[
{
transform:"scale(1)",
opacity:1
},
{
transform:"scale(.92)",
opacity:.9
},
{
transform:"scale(30)",
opacity:0
}
],
{
duration:1800,
easing:"ease-in-out",
fill:"forwards"
}
);

},2200);

/* REDIRECT */

setTimeout(() => {

window.location.href =
"home.html";

},3900);

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

enterButton.addEventListener(
"click",
startConstellation
);

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
