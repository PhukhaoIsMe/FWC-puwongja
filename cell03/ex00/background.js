function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function changeBackground() {
    var color = getRandomColor();

    document.body.style.backgroundColor = color;
    console.log(color);
}

document.getElementById("change-btn").addEventListener("click", changeBackground);
