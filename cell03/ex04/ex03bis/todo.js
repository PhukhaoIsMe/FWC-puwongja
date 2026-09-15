function saveCookie(value) {
    var date = new Date();

    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = "ft_list=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

function readCookie() {
    var parts = document.cookie.split(";");

    for (var i = 0; i < parts.length; i++) {
        var part = parts[i].trim();

        if (part.indexOf("ft_list=") === 0) {
            return part.replace("ft_list=", "");
        }
    }

    return "";
}

function saveList() {
    var texts = [];

    $("#ft_list").children().each(function () {

        texts.push(encodeURIComponent($(this).text()));
    });

    saveCookie(texts.join("|"));
}

function addTodo(text) {
    var todo = $("<div></div>");

    todo.addClass("todo");
    todo.text(text);

    todo.click(function () {
        if (confirm("Remove \"" + $(this).text() + "\" ?")) {
            $(this).remove();
            saveList();
        }
    });

    $("#ft_list").prepend(todo);
}

function createTodo() {
    var text = prompt("What do you have to do?");

    if (text === null || text.trim() === "") {
        return;
    }

    addTodo(text);
    saveList();
}

function loadList() {
    var saved = readCookie();

    if (saved === "") {
        return;
    }

    var texts = saved.split("|");

    for (var i = texts.length - 1; i >= 0; i--) {
        addTodo(decodeURIComponent(texts[i]));
    }
}

$(document).ready(function () {
    $("#new-btn").click(createTodo);

    loadList();
});
