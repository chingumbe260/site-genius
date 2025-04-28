function addStaff() {
    // Logic to dynamically add a new staff member input field
    const staffSection = document.createElement('div');
    staffSection.innerHTML = `
        <label for="staff-name">Name of staff member:</label>
        <input type="text" name="staffName" placeholder="Staff Name" required>
        <br>
        <label for="staff-picture">Picture of staff member:</label>
        <input type="file" name="staffPicture" accept="image/*">
        <br>`;
    document.querySelector('#staff-form').insertBefore(staffSection, document.querySelector('#staff-form button[onclick="addStaff()"]'));
}
