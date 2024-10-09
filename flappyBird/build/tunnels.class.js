export default class Tunnels {
    calculateY(top_tunnel, bottom_tunnel) {
        //The height is given by percent !!
        //I set total as 90% cuz i wanna a little space of 10%.
        const total = 80;
        const top_tunnel_height = Math.round(Math.random() * total);
        const bottom_tunnel_height = total - top_tunnel_height;
        top_tunnel.style.height = `${top_tunnel_height}%`;
        bottom_tunnel.style.height = `${bottom_tunnel_height}%`;
    }
    validateTunnels(parent, top_tunnel, bottom_tunnel) {
        const parentWidth = Number(getComputedStyle(parent).width.replace("px", ""));
        const distanceRight = Number(getComputedStyle(top_tunnel).right.replace("px", ""));
        const percent = (7.36 / 100) * parentWidth;
        if (distanceRight >= (percent + parentWidth)) {
            this.calculateY(top_tunnel, bottom_tunnel);
        }
    }
}
