// Welcome pop-up for new users when the page loads
function welcomePopup() {
    alert("Welcome to the Wani School System!");
}

// Function to display a message when the "Sign Up" button is clicked
function displayMessage(message) {
    document.getElementById("messageDisplay").innerHTML = message;
}

// Function to show the special offer
function showSpecialOffer() {
    var offer = document.getElementById("specialOffer");
    offer.classList.remove("hidden");  // Removes the 'hidden' class to display the offer
}
