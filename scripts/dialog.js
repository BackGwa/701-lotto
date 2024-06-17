function dialog_show(title, subtitle, button, event) {
    const dialog = document.querySelector(".dialog");

    play("res/sounds/alert_window.mp3");

    dialog.querySelector(".dialog-title").innerText = title;
    dialog.querySelector(".dialog-subtitle").innerText = subtitle;
    dialog.querySelector("#dialog-btn").innerText = button;
    dialog.querySelector("#dialog-btn").setAttribute("onclick", event);

    dialog.classList.add("view-dialog");
}

function dialog_close() {
    const dialog = document.querySelector(".dialog");
    dialog.classList.remove("view-dialog");
}