function themePicker(chosenTheme) {
    current = document.getElementById("body-top-container").className;

    if (current === "body-top-container-" + chosenTheme) {
        return;
    } else {
        document.getElementById("body-top-container").className = "body-top-container-" + chosenTheme;
        document.getElementById("triangle-right").className = "triangle-right-" + chosenTheme;
        document.getElementById("triangle-left").className = "triangle-left-" + chosenTheme;
        document.getElementById("triangle-top-left").className = "triangle-top-left-" + chosenTheme;
        document.getElementById("header-2").className = "header-2-" + chosenTheme;
    }
};