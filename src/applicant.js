import applicantApi from './applicant-api.js';

const name = document.getElementById('full-name');
const age = document.getElementById('age');
const appSkills = document.getElementById('app-skills');
const found = document.getElementById('found');
const role = document.getElementById('role');
const motivation = document.getElementById('motivation');

const applicant = applicantApi.get();
console.log(applicant);
if(!applicant) {
    window.location = './';
}

name.textContent = applicant.name;
age.textContent = applicant.age;
appSkills.textContent = applicant.appSkills;
if(applicant.appSkills) {
    appSkills.textContent = applicant.appSkills.join(', ');
}
found.textContent = applicant.found;
role.textContent = applicant.role;
motivation.textContent = applicant.motivation;