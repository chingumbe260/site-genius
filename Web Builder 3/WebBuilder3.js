document.getElementById('courses-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Redirect to the contacts page
    window.location.href = 'WebBuilder4.html';
});

function addCourse() {
    // Logic to dynamically add a new course input field
    const courseSection = document.createElement('div');
    courseSection.innerHTML = `
        <textarea name="courses" placeholder="Additional course/program"></textarea>
        <br>
        <textarea name="courseDescription" placeholder="Additional description"></textarea>
        <br>`;
    document.querySelector('#courses-form').insertBefore(courseSection, document.querySelector('#courses-form button[type="button"]'));
}
