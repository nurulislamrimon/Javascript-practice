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
    randomDisplay.value = getPin();
});

document.getElementById("buttons-ancestor").addEventListener("click", function (event) {
    const customDisplay = document.getElementById("custom-display");
    const collectedNumber = event.target.innerText;
    if (collectedNumber == "C") {
        customDisplay.value = "";
    } else if (collectedNumber == "Submit") {
        const randomDisplay = document.getElementById("random-display");
        if (randomDisplay.value == "") {
            const article = document.querySelector("article")
            article.innerText = "Wrong try! Please Generate a number first."
        }
        else if (randomDisplay.value == customDisplay.value) {
            document.getElementById("matched-massage").style.display = "block";
            document.getElementById("missmatched-massage").style.display = "none";
            window.location.href = "myShoppingCart/index.html";
        }
        else {
            document.getElementById("missmatched-massage").style.display = "block";
            document.getElementById("matched-massage").style.display = "none";
            const tryNumberId = document.getElementById("try-no");
            console.log(tryNumberId.innerText);
            let tryNumber = parseInt(tryNumberId.innerText) - 1;
            if (tryNumberId.innerText > 0) {
                tryNumberId.innerText = tryNumber;
            }
        }
        // customDisplay.value == getPin();
    }
    else {
        customDisplay.value += collectedNumber;
    }
})