class Bird{

    public fly(bird:HTMLImageElement,currentHeight:number){
        currentHeight += 7;
        bird.style.bottom= `${currentHeight}%`;
    }

    public fall(bird:HTMLImageElement,currentHeight:number){
        currentHeight -= 5;
        bird.style.bottom = `${currentHeight}%`;
    }

}