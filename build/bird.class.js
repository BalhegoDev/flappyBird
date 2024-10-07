"use strict";
class Bird {
    fly(bird, currentHeight) {
        currentHeight += 7;
        bird.style.bottom = `${currentHeight}%`;
    }
    fall(bird, currentHeight) {
        currentHeight -= 5;
        bird.style.bottom = `${currentHeight}%`;
    }
}
