function makeApplicantRow(applicant) {
    const tr = document.createElement('tr');

    const nameCell = makeNameCell(applicant.name);
    const ageCell = makeTextCell(applicant.age);
    const appSkillsCell = makeAppSkillsCell(applicant.appSkills);
    const foundCell = makeFoundCell(applicant.found);

    tr.appendChild(nameCell);
    tr.appendChild(ageCell);
    tr.appendChild(appSkillsCell);
    tr.appendChild(foundCell);

    return tr; 
}

function makeNameCell(name) {
    const nameCell = document.createElement('td');
    const link = document.createElement('a');

    const searchParams = new URLSearchParams();
    
    searchParams.set('name', name);
    
    link.href = 'applicant.html?' + searchParams.toString();
    
    link.textContent = name;
    nameCell.appendChild(link);
    
    return nameCell;
}

function makeAppSkillsCell(appSkills) {
    let appSkillsList = '';
    if(appSkills) {
        appSkillsList = appSkills.join(', ');
    }
    const cell = makeTextCell(appSkillsList);
    return cell;
}

function makeTextCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

function makeFoundCell(found) {
    const foundCell = document.createElement('td');
    foundCell.textContent = found;
    return foundCell;
}

export default makeApplicantRow;