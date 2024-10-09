export default class Scenario{

    public birdOnTunnel(parent:HTMLDivElement,bird:HTMLImageElement,top_tunnel:HTMLImageElement,bottom_tunnel:HTMLImageElement):boolean{
        const top_tunnel_height:number = Number(String(getComputedStyle(top_tunnel).height).replace("px",""));
        const bottom_tunnel_height:number = Number(String(getComputedStyle(bottom_tunnel).height).replace("px",""));

        const parent_height:number = Number(String(getComputedStyle(parent).height).replace("px",""));

        const top_tunnel_X:number = Number(String(getComputedStyle(top_tunnel).right).replace("px",""));
        const bottom_tunnel_X:number = Number(String(getComputedStyle(bottom_tunnel).right).replace("px",""));

        const limit_fly_top_area:number = parent_height - top_tunnel_height;
        const limit_fly_bottom_area:number = parent_height - bottom_tunnel_height;

        const birdY:number = Number(String(getComputedStyle(bird).top).replace("px",""));
        const birdX:number = Number(String(getComputedStyle(bird).top).replace("px",""));

        if(((birdY >= limit_fly_top_area) && (birdX <= top_tunnel_X)) || ((birdY <= limit_fly_bottom_area) && (birdX <= bottom_tunnel_X))){
            return true;
        }
        return false;
    }
}