import getApplicant from '../src/getApplicant.js';
const test = QUnit.test;

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
    formData.set('full-name', expected.name);
    formData.set('age', expected.age);
    formData.set('app-skills', expected.appSkills[0]);
    formData.append('app-skills', expected.appSkills[1]);
    formData.set('found', 'yes');
    formData.set('role', expected.role);
    formData.set('motivation', expected.motivation);
    //Act 
    const applicant = getApplicant(formData);

    //Assert
    assert.deepEqual(applicant, expected);
});