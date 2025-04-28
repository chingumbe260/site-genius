document.addEventListener("DOMContentLoaded", function () {
    const mediaForm = document.getElementById("media-form");
    const picturesInput = document.getElementById("institution-pictures");
    const logoInput = document.getElementById("institution-logo");

    mediaForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Helper function to read files as Base64
        function readFilesAsBase64(files) {
            return Promise.all(
                Array.from(files).map((file) => {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = () => reject(reader.error);
                        reader.readAsDataURL(file);
                    });
                })
            );
        }

        try {
            // Get pictures and logo as Base64
            const pictures = picturesInput.files.length > 0 ? await readFilesAsBase64(picturesInput.files) : [];
            const logo = logoInput.files.length > 0 ? await readFilesAsBase64(logoInput.files) : [];

            // Save the data to localStorage
            localStorage.setItem("institutionPictures", JSON.stringify(pictures));
            localStorage.setItem("institutionLogo", JSON.stringify(logo));

            // Redirect to the display page
            window.location.href = "displayMedia.html";
        } catch (error) {
            console.error("Error processing files:", error);
            alert("Failed to process files. Please try again.");
        }
    });
});
