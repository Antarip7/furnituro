const navi = document.querySelector(".nav-items");
const room = document.querySelector(".a2");
const room1 = document.querySelector(".a3");
const room2 = document.querySelector(".a4");

navi.addEventListener("click", () => {
    console.log("u clicked me!!!")
});

setTimeout(() => {
    room.style.color = "#00FDE2";
}, 7000);

setTimeout(() => {
    room1.style.color = "#77FD00";
}, 10000);

setTimeout(() => {
    room2.style.color = "#FD0000";
}, 13000);