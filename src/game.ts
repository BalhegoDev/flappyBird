import Bird from "./bird.class.js";
import Tunnels from "./tunnels.class.js";

const game:HTMLDivElement = document.querySelector<HTMLDivElement>(".game")!;
const bird = new Bird();
const tunnelsMethods = new Tunnels();
const birdElement:HTMLImageElement = document.querySelector<HTMLImageElement>("#bird")!;
const start:HTMLButtonElement = document.querySelector(".start")!;

game.style.display = "none";

start.addEventListener("click"  , () => {
    game.style.display = "block"
})


function fall(){
    bird.fall(birdElement,getComputedStyle(birdElement).bottom);
    requestAnimationFrame(fall);
}

game.addEventListener("keyup",(e:KeyboardEvent) =>{
    bird.fly(birdElement,getComputedStyle(birdElement).bottom);
})