class Tunnels{

    public calculateY(top_tunnel:HTMLImageElement, bottom_tunnel:HTMLImageElement){
        //The height is given by percent !!
        //I set total as 90% cuz i wanna a little space of 10%.
        const total:number = 90;

        const top_tunnel_height = Math.round(Math.random() * total);
        const bottom_tunnel_height = total - top_tunnel_height;

        top_tunnel.style.height = `${top_tunnel_height}%`;
        bottom_tunnel.style.height = `${bottom_tunnel_height}%`;
    }

}