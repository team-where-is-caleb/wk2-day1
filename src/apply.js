import getApplicant from '../src/getApplicant.js';
// Reference form node Hi
const form = document.getElementById('party-app');

//main event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const applicant = getApplicant(formData);
    console.log(applicant);
});
