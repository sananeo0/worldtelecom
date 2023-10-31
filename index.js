document.getElementById("ru").addEventListener("click", function () {
    localStorage.setItem("defaultPage", "ru.html");

});

document.getElementById("az").addEventListener("click", function () {
    localStorage.setItem("defaultPage", "az.html");

});

if (!localStorage.getItem("defaultPage")) {

    localStorage.setItem("defaultPage", "az.html");
}

let a = localStorage.getItem("defaultPage")

if (a === "az.html" && window.location.href.indexOf("az.html") === -1) {
    window.location.href = "az.html";
} else if (a === "ru.html" && window.location.href.indexOf("ru.html") === -1) {
    window.location.href = "ru.html";
}