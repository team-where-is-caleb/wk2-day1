import applicantApi from './applicant-api.js';

const tbody = document.getElementById('applicants');
const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    const ageCell = document.createElement('td');
    ageCell.textContent = applicant.age;
    tr.appendChild(ageCell);

    const appSkillsCell = document.createElement('td');
    let appSkillsList = '';
    if(applicant.appSkills) {
        appSkillsList = applicant.appSkills.join(', ');
    }
    
    appSkillsCell.textContent = appSkillsList;
    tr.appendChild(appSkillsCell);

    const foundCell = document.createElement('td');
    foundCell.textContent = applicant.found;
    tr.appendChild(foundCell);

    tbody.appendChild(tr);
}