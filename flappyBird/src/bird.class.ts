export default class Bird{
    public fly(bird:HTMLImageElement,currentHeight:string){
        
       const numberHeight:number = Number(currentHeight.replace("px", ""));
       bird.style.bottom = `${numberHeight + 70}px`;
    }

    public fall(bird:HTMLImageElement,currentHeight:string){
        const numberHeight:number = Number(currentHeight.replace("px", ""));
        bird.style.bottom = `${numberHeight - 3}px`;
    }

    public verifyHeight(bird:HTMLImageElement,top_tunnel:HTMLImageElement,bottom_tunnel:HTMLImageElement){
        const birdY = getComputedStyle(bird).top;
        const birdX = getComputedStyle(bird).left;
        
        const top_tunnelX = getComputedStyle(top_tunnel).right;
        const top_tunnelHeight = getComputedStyle(top_tunnel).height;

        const bottom_tunnelX = getComputedStyle(bottom_tunnel).right;
        const bottom_tunnelHeight = getComputedStyle(top_tunnel).height;

        
        
    }
}