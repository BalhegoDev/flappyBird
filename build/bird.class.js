export default class Bird {
    fly(bird, currentHeight) {
        const numberHeight = Number(currentHeight.replace("px", ""));
        bird.style.bottom = `${numberHeight + 70}px`;
    }
    fall(bird, currentHeight) {
        const numberHeight = Number(currentHeight.replace("px", ""));
        bird.style.bottom = `${numberHeight - 3}px`;
    }
}
