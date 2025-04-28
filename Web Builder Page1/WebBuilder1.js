document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("institution-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Retrieve form data
        const institutionName = document.getElementById("institution-name").value;
        const institutionType = document.querySelector('input[name="institutionType"]:checked').value;
        const institutionDescription = document.querySelector('textarea[name="institutionDescription"]').value;
        const institutionMotto = document.querySelector('textarea[name="institutionMotto"]').value;
        const noticeBoard = document.querySelector('textarea[name="noticeBoard"]').value;

        // Store data in localStorage
        localStorage.setItem("institutionName", institutionName);
        localStorage.setItem("institutionType", institutionType);
        localStorage.setItem("institutionDescription", institutionDescription);
        localStorage.setItem("institutionMotto", institutionMotto);
        localStorage.setItem("noticeBoard", noticeBoard);

        // Redirect to the display page
        window.location.href = "display1.html"; // Ensure this is the correct path to the display page
    });
});
