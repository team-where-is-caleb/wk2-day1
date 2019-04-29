function getApplicant(formData) {
    //Make object literal, literally making an object
    const applicant = {
        name: formData.get('full-name'),
        age: formData.get('age'),
        appSkills: formData.getAll('app-skills'),
        found: formData.get('found'),
        role: formData.get('role'),
        motivation: formData.get('motivation'),
    };
    return applicant;
}
export default getApplicant;