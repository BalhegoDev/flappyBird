import Bird from "./bird.class.js";
import Tunnels from "./tunnels.class.js";
import Scenario from "./scenario.class.js";
const bird = new Bird();
const tunnelsMethods = new Tunnels();
const scenario = new Scenario();
const game = document.querySelector(".game");
const birdElement = document.querySelector("#bird");
const start = document.querySelector(".start");
//tunnels
const first_top_tunnel = document.querySelector(".first_top_tunnel");
const first_bottom_tunel = document.querySelector(".first_bottom_tunel");
start.addEventListener("click", () => {
});
function fall() {
    bird.fall(birdElement, getComputedStyle(birdElement).bottom);
    requestAnimationFrame(fall);
}
function validateTunnel() {
    tunnelsMethods.validateTunnels(game, first_top_tunnel, first_bottom_tunel);
    requestAnimationFrame(validateTunnel);
}
console.log(getComputedStyle(game).width);
validateTunnel();
game.addEventListener("keyup", (e) => {
    bird.fly(birdElement, getComputedStyle(birdElement).bottom);
});
