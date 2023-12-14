function navigateTo(page) {
    const contentSections = document.querySelectorAll('main');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(page);
    selectedSection.style.display = 'block';
}

function submitForm(event) {
    event.preventDefault();
    alert('Form submitted! (This is a dummy action)');
}

document.addEventListener("DOMContentLoaded", function () {
    // Additional JavaScript logic can be added here
});
