const modifyHex = (hex) => {
    if (hex.length === 4) {
        hex = hex.replace("#", "");
    }
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    return hex;
};

const colorMixingHex = (colors) => {
    let rgb = [0, 0, 0];
    colors.forEach(color => {
        let hex = color.replace("#", "");
        if (hex.length !== 6) {
            hex = modifyHex(hex);
        }
        rgb[0] += parseInt(hex.slice(0, 2), 16);
        rgb[1] += parseInt(hex.slice(2, 4), 16);
        rgb[2] += parseInt(hex.slice(4, 6), 16);
    });
    rgb[0] = Math.round(rgb[0] / colors.length);
    rgb[1] = Math.round(rgb[1] / colors.length);
    rgb[2] = Math.round(rgb[2] / colors.length);
    return "#" + rgb.map(value => value.toString(16).padStart(2, "0")).join("");
};

export {colorMixingHex};