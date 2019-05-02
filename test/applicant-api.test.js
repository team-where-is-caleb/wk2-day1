const test = QUnit.test;
import applicantApi from '../src/applicant-api.js';

QUnit.module('applicant api');

applicantApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round-trip applicant', (assert) => {
    testStorage.removeItem('applicants');
    //arrange
    const applicant = { name: 'tester' };
    //act
    applicantApi.save(applicant);
    const result = applicantApi.get();
    //assert
    assert.deepEqual(result, applicant);  

});

test('no applicants in local storage returns empty array', (assert) => {
    testStorage.removeItem('applicants');
    const expected = [];
    const applicants = applicantApi.getAll();
    assert.deepEqual(applicants, expected);

});

test('two saves return array with two items', (assert) => {
    testStorage.removeItem('applicants');

    const applicant1 = { name: 'tester1' };
    const applicant2 = { name: 'tester2' };
    const expected = [applicant1, applicant2];

    applicantApi.save(applicant1);
    applicantApi.save(applicant2);

    const applicants = applicantApi.getAll();

    assert.deepEqual(applicants, expected);

});