document.getElementById('contacts-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Redirect to the staff members page
    window.location.href = 'WebBuilder5.html';
});

function addContact() {
    // Logic to dynamically add a new contact number input field
    const contactSection = document.createElement('div');
    contactSection.innerHTML = `
        <input type="number" name="contactNumber" placeholder="Additional Contact Number" required>
        <br>`;
    document.querySelector('#contacts-form').insertBefore(contactSection, document.querySelector('#contacts-form button[onclick="addContact()"]'));
}
