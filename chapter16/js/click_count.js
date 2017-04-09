/*
Counting clicks
*/

function click() {
    const clickCountElement = document.getElementById("clickCount");
    let clickCount = Number(clickCountElement.textContent);
    clickCountElement.textContent = clickCount + 1;
}

document.getElementById("myButton").addEventListener("click", click);

document.getElementById("desactivate").addEventListener("click", e => {
    document.getElementById("myButton").removeEventListener("click", click);
});