function view_alert(content, time) {
    const alert_element = document.querySelector(".alert");
    const alert_content = document.querySelector("#alert-content");

    if (!alert_element.classList.contains("view-alert")) {
        alert_element.classList.add("view-alert")
    } else {
        try {
            clearTimeout(close_alert);
        } catch {}
    }

    alert_content.innerText = content;

    close_alert = setTimeout(() => {
        alert_element.classList.remove("view-alert")
    }, time);
}