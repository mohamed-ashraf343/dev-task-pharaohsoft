// Toggle Navigation Sidebar
function navToggle() {
    const sidebar = document.getElementById('mySidebar');
    if (sidebar) {
        sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
    }
}

// Search Functionality
function search() {
    const searchBox = document.getElementById('search-box');
    if (searchBox) {
        searchBox.style.width = searchBox.style.width === '250px' ? '0' : '250px';
    }
}

// Function to toggle the navigation menu
function navToggle() {
    const navbar = document.getElementById("navbarNav"); // Replace with your navbar's ID
    navbar.classList.toggle("show"); // Toggle the 'show' class

    // Optional: Change the button icon
    const toggler = document.querySelector(".navbar-toggler");
    if (navbar.classList.contains("show")) {
        toggler.innerHTML = "✖"; // Change icon to 'X' for close
    } else {
        toggler.innerHTML = "☰"; // Change icon back to '☰' for menu
    }
}

// Services: Manage Panel Transitions
let panels = document.querySelectorAll('.panel');
let currentIndex = 0;

// Function to remove the active class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Function to set the next active panel
function setActivePanel(index) {
    removeActiveClasses();

    if (!panels[index]) {
        console.error(`Panel at index ${index} does not exist.`);
        return;
    }

    panels[index].classList.add('active');
}

// Set the initial active panel
setActivePanel(currentIndex);

// Add click event to manually activate panels
panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        currentIndex = index;
        setActivePanel(currentIndex);
    });
});

// Automatically change panels every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % panels.length; // Loop back to the first panel
    setActivePanel(currentIndex);
}, 5000);

// Client Slider: Circular Sliding Effect

// Slider with Next/Prev Controls


// Card Background Update on Click
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    // Function to update the background image
    function updateBackground(imageUrl) {
        cards.forEach((card) => {
            card.style.backgroundImage = `url(${imageUrl})`;
        });
    }

    // Set the first card as active and update the background
    if (cards.length > 0) {
        const firstCard = cards[0]; // First card
        const firstImgSrc = firstCard.querySelector("img").src; // Get the first image URL
        firstCard.classList.add("active"); // Set it as active
        updateBackground(firstImgSrc); // Set the image as background
    }

    // Add click event to each card
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const imgSrc = card.querySelector("img").src; // Get image URL of the clicked card

            // Update the backgrounds
            updateBackground(imgSrc);

            // Set the clicked card as active
            cards.forEach((c) => c.classList.remove("active"));
            card.classList.add("active");
        });
    });
});
