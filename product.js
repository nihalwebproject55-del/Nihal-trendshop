
document.addEventListener("DOMContentLoaded", function() {
    // ------------------ Sidebar ------------------
    const sidebar = document.querySelector(".side");
    const menuIcon = document.querySelector(".menu-icon");
    const closeBtn = document.querySelector(".close-btn");

    if (menuIcon && sidebar) {
        menuIcon.addEventListener("click", () => sidebar.style.left = "0");
    }
    if (closeBtn && sidebar) {
        closeBtn.addEventListener("click", () => sidebar.style.left = "-70%");
    }

    // ------------------ Search Functionality ------------------
    const inputbox = document.querySelector(".search");
    const productsContainer = document.querySelector(".nextpageimage");
    const productBoxes = productsContainer ? productsContainer.querySelectorAll(".box") : [];
    const footer = document.querySelector("footer");

    // Create "No results" message
    const noResults = document.createElement("p");
    noResults.textContent = "No products found";
    noResults.style.textAlign = "center";
    noResults.style.fontSize = "1.2rem";
    noResults.style.color = "black";
    noResults.style.display = "none";

    if (productsContainer) productsContainer.appendChild(noResults);

    if (inputbox) {
        inputbox.addEventListener("keyup", function(event) {
            const value = event.target.value.toLowerCase();
            let hasMatch = false;

            productBoxes.forEach(box => {
                const h1 = box.querySelector("h1");
                if (!h1) return;

                const name = h1.textContent.toLowerCase();
                if (name.includes(value)) {
                    box.style.display = "block";
                    hasMatch = true;
                } else {
                    box.style.display = "none";
                }
            });

            // Show "No products found" message
            noResults.style.display = hasMatch ? "none" : "block";
            if (footer) footer.style.display = hasMatch ? "" : "none";
        });
    }

    // ------------------ Protect Page (User must be logged in) ------------------
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }

    // ------------------ Show Name on Main Page ------------------
    const firstname = localStorage.getItem("firstname");
    const userNameEl = document.getElementById("userName");
    if (userNameEl && firstname) {
        userNameEl.innerText = firstname;
    }
});
