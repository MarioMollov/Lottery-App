export function getRandomNumber () {
    return Math.floor(Math.random() * 11);
};

export function getRandomColor() {
    return 'hsl(' +Math.floor(Math.random()*360) + ', 85%, 75%)';
};