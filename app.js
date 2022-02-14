const randomNumber = getPin();
function getPin() {
    const createRandomNumber = Math.round(Math.random() * 10000);
    if (createRandomNumber > 1000) {
        return createRandomNumber;
    } else {
        return getPin();
    }
}

document.querySelector(".generate-btn").addEventListener("click", function () {
    const randomDisplay = document.getElementById("random-display");
    randomDisplay.value = randomNumber;
});

document.getElementById("buttons-ancestor").addEventListener("click", function (event) {
    const customDisplay = document.getElementById("custom-display");
    const collectedNumber = event.target.innerText;
    if (collectedNumber == "C") {
        customDisplay.value = "";
    } else if (collectedNumber == "Submit") {
        if (randomNumber == customDisplay.value) {
            document.getElementById("matched-massage").style.display = "block";
            document.getElementById("missmatched-massage").style.display = "none";
            window.location.href = "myShoppingCart/index.html";
        }
        else {
            document.getElementById("missmatched-massage").style.display = "block";
            document.getElementById("matched-massage").style.display = "none";
        }
        // customDisplay.value == getPin();
    }
    else {
        customDisplay.value += collectedNumber;
    }
})