import Bird from "./bird.class.js";
import Tunnels from "./tunnels.class.js";
const game = document.querySelector(".game");
const bird = new Bird();
const tunnelsMethods = new Tunnels();
const birdElement = document.querySelector("#bird");
const start = document.querySelector(".start");
game.style.display = "none";
start.addEventListener("click", () => {
    game.style.display = "block";
});
function fall() {
    bird.fall(birdElement, getComputedStyle(birdElement).bottom);
    requestAnimationFrame(fall);
}
game.addEventListener("keyup", (e) => {
    bird.fly(birdElement, getComputedStyle(birdElement).bottom);
});
