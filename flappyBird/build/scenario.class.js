export default class Scenario {
    birdOnTunnel(parent, bird, top_tunnel, bottom_tunnel) {
        const top_tunnel_height = Number(String(getComputedStyle(top_tunnel).height).replace("px", ""));
        const bottom_tunnel_height = Number(String(getComputedStyle(bottom_tunnel).height).replace("px", ""));
        const parent_height = Number(String(getComputedStyle(parent).height).replace("px", ""));
        const top_tunnel_X = Number(String(getComputedStyle(top_tunnel).right).replace("px", ""));
        const bottom_tunnel_X = Number(String(getComputedStyle(bottom_tunnel).right).replace("px", ""));
        const limit_fly_top_area = parent_height - top_tunnel_height;
        const limit_fly_bottom_area = parent_height - bottom_tunnel_height;
        const birdY = Number(String(getComputedStyle(bird).top).replace("px", ""));
        const birdX = Number(String(getComputedStyle(bird).top).replace("px", ""));
        if (((birdY >= limit_fly_top_area) && (birdX <= top_tunnel_X)) || ((birdY <= limit_fly_bottom_area) && (birdX <= bottom_tunnel_X))) {
            return true;
        }
        return false;
    }
}
