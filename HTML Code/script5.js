let btn = document.querySelector("button");
let text = document.querySelector("p");

function toggleDarkmode() {
    document.body.classList.toggle('darkmode');

    if (document.body.classList.contains("darkmode")) {
        btn.textContent = "Lightmode";
        text.textContent = "You are Gorgeous.";
    } else {
        btn.textContent = "Darkmode";
        text.textContent = "You are Perfect.";
    }
}
