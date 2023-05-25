window.onload = function () {
    const encEmail = "YWxleGFuZGVyLmtvd3Npa0BnbXguZGU=";
    const form = document.getElementById("contact");
    form.setAttribute("href", "mailto:".concat(atob(encEmail)));
};