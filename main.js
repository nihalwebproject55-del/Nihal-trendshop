// ------------------ SELECT ELEMENTS ------------------
const side = document.querySelector('.side');          // sidebar container
const menuIcon = document.querySelector('.menu-icon'); // menu button
const closeBtn = document.querySelector('.close-btn'); // sidebar close button
const logoutBtn = document.getElementById("logoutBtn");// logout button

// ------------------ OPEN SIDEBAR ------------------
menuIcon.addEventListener('click', () => {
    side.style.left = '0'; // show sidebar
});

// ------------------ CLOSE SIDEBAR ------------------
closeBtn.addEventListener('click', () => {
    side.style.left = '-70%'; // hide sidebar
});

// ------------------ CLOSE SIDEBAR ON LINK CLICK & SMOOTH SCROLL ------------------
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', (e) => {
        side.style.left = '-70%'; // hide sidebar

        const targetId = link.getAttribute('href');
        if (targetId.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ------------------ LOGOUT BUTTON ------------------
logoutBtn.addEventListener("click", function() {
    localStorage.setItem("loggedIn", "false"); // logout
    window.location.href = "login.html";       // redirect to login page
});



// ------------------ Show User Name ------------------
const firstname = localStorage.getItem("firstname"); // get saved firstname
const userNameEl = document.getElementById("userName");

if (userNameEl) {
    if (firstname) {
        userNameEl.innerText = firstname; // display name
    } else {
        userNameEl.innerText = "Guest";   // fallback
    }
}