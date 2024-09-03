document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.querySelector('.aniform-container');
    const jobTitleInput = document.getElementById('job-title');
    const jobDescriptionInput = document.getElementById('job-description');
    const workplaceTypeSelect = document.getElementById('workplace-type');
    const designerTypeSelect = document.getElementById('designer-type');
    const employmentTypeSelect = document.getElementById('employment-type');
    const applicationLinkInput = document.getElementById('application-link');
    const companyNameInput = document.getElementById('company-name');
    const companyWebsiteInput = document.getElementById('company-website');

    const submitButton = document.querySelector('.anisubmit-button');
    const cancelButton = document.querySelector('.anicancel-button');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        // form validation
        if (jobTitleInput.value === '' || jobDescriptionInput.value === '' || workplaceTypeSelect.value === '' || designerTypeSelect.value === '' || employmentTypeSelect.value === '' || applicationLinkInput.value === '' || companyNameInput.value === '' || companyWebsiteInput.value === '') {
            alert('Please fill in all required fields.');
            return;
        }

        // form submission
        alert('Form submitted successfully!');
        // Here you would typically send the form data to your server
        // For example, using fetch:
        /*
        fetch('/submit', {
            method: 'POST',
            body: new FormData(formContainer)
        }).then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        */
    });

    cancelButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Reset the form
        formContainer.reset();
    });
});
