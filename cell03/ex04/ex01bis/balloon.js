var colors = ["red", "green", "blue"];
var size = 200;
var colorIndex = 0;

function render() {
    $("#balloon").css("width", size + "px");
    $("#balloon").css("height", size + "px");
    $("#balloon").css("background-color", colors[colorIndex]);
}

function inflate() {
    size = size + 10;

    colorIndex = colorIndex + 1;
    if (colorIndex > 2) {
        colorIndex = 0;
    }

    if (size > 420) {
        size = 200;
    }

    render();
}

function deflate() {
    size = size - 5;
    if (size < 200) {
        size = 200;
    }

    colorIndex = colorIndex - 1;
    if (colorIndex < 0) {
        colorIndex = 2;
    }

    render();
}

$(document).ready(function () {
    $("#balloon").click(inflate);
    $("#balloon").mouseleave(deflate);

    render();
});
