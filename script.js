const aboutButton = document.getElementById("aboutButton");
const aboutPortal = document.getElementById("aboutPortal");
if (aboutButton && aboutPortal) {
    aboutButton.addEventListener("click", function () {
        const isOpening =
            !aboutPortal.classList.contains("active");
        if (isOpening) {
            aboutPortal.classList.add("active");
            // Change button text
            const buttonText =
                aboutButton.querySelector("span:first-child");
            if (buttonText) {
                buttonText.textContent = "CLOSE";
            }
            const arrow =
                aboutButton.querySelector(".button-arrow");
            if (arrow) {
                arrow.textContent = "↑";
            }
            aboutButton.classList.add("open");
            setTimeout(function () {
                aboutPortal.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 150);
        } else {
            aboutPortal.classList.remove("active");
            const buttonText =
                aboutButton.querySelector("span:first-child");
            if (buttonText) {
                buttonText.textContent = "ABOUT";
            }
            const arrow =
                aboutButton.querySelector(".button-arrow");
            if (arrow) {
                arrow.textContent = "↓";
            }
            aboutButton.classList.remove("open");
            setTimeout(function () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }, 100);
        }
    });
}

function updateDateTime() {
    const now = new Date();
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Manila"
    };
    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Manila"
    };
    const date =
        now.toLocaleDateString(
            "en-US",
            dateOptions
        );
    const time =
        now.toLocaleTimeString(
            "en-US",
            timeOptions
        );
    const dateTime =
        document.getElementById("dateTime");
    if (dateTime) {
        dateTime.textContent =
            date + " • " + time;
    }
}

updateDateTime();

setInterval(
    updateDateTime,
    1000
);