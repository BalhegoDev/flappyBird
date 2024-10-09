export default class Bird {
    fly(bird, currentHeight) {
        const numberHeight = Number(currentHeight.replace("px", ""));
        bird.style.bottom = `${numberHeight + 70}px`;
    }
    fall(bird, currentHeight) {
        const numberHeight = Number(currentHeight.replace("px", ""));
        bird.style.bottom = `${numberHeight - 3}px`;
    }
    verifyHeight(bird, top_tunnel, bottom_tunnel) {
        const birdY = getComputedStyle(bird).top;
        const birdX = getComputedStyle(bird).left;
        const top_tunnelX = getComputedStyle(top_tunnel).right;
        const top_tunnelHeight = getComputedStyle(top_tunnel).height;
        const bottom_tunnelX = getComputedStyle(bottom_tunnel).right;
        const bottom_tunnelHeight = getComputedStyle(top_tunnel).height;
    }
}
