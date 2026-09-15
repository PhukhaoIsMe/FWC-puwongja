function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
function changeBackground() {
    var color = getRandomColor();

    $("body").css("background-color", color);
    console.log(color);
}

$(document).ready(function () {
    $("#change-btn").click(changeBackground);
});
