import applicantApi from './applicant-api.js';
import makeApplicantRow from './make-applicant-row.js';

const tbody = document.getElementById('applicants');
const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
    const tr = makeApplicantRow(applicant);
  
    tbody.appendChild(tr);
}