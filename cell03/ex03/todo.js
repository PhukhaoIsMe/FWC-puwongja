var list = document.getElementById("ft_list");
var newButton = document.getElementById("new-btn");

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

    for (var i = 0; i < list.children.length; i++) {

        texts.push(encodeURIComponent(list.children[i].textContent));
    }

    saveCookie(texts.join("|"));
}

function addTodo(text) {
    var todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        if (confirm("Remove \"" + this.textContent + "\" ?")) {
            this.remove();
            saveList();
        }
    });

    list.prepend(todo);
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

newButton.addEventListener("click", createTodo);

loadList();
