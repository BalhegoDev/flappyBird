export default class Bird{
    public fly(bird:HTMLImageElement,currentHeight:string){
        
       const numberHeight:number = Number(currentHeight.replace("px", ""));
       bird.style.bottom = `${numberHeight + 70}px`;
    }

    public fall(bird:HTMLImageElement,currentHeight:string){
        const numberHeight:number = Number(currentHeight.replace("px", ""));
        bird.style.bottom = `${numberHeight - 3}px`;
    }
}