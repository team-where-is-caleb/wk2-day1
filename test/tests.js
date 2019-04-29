const test = QUnit.test;
function getApplicant(formData) {

    //Make object literal, literally making an object
    const applicant = {
        name: formData.get('name'),
        age: formData.get('age'),
        appSkills: formData.getAll('app-skills'),
        found: formData.get('found'),
        role: formData.get('role'),
        motivation: formData.get('motivation'),
    }
    return applicant;
}

test('time to test a function', function(assert) {
    //Arrange
    const expected = {
        name: 'Dirt',
        age: '36',
        appSkills: ['tracking', 'vocals'],
        found: 'yes',
        role: 'helicopter',
        motivation: 'i like caleb'
    };
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('age', expected.age);
    formData.set('app-skills', expected.appSkills[0]);
    formData.append('app-skills', expected.appSkills[1]);
    formData.set('found', 'yes');
    formData.set('role', expected.role);
    formData.set('motivation', expected.motivation);
    //Act 
    const applicant = getApplicant(formData);

    // Call the function you're testing and set the result to a const

    //Assert
    assert.deepEqual(applicant, expected);
});