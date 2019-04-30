const test = QUnit.test;

//verify code below before implementing
//QUnit.module('applicant api');

test('round-trip applicant test', (assert) => {
//arrange
const applicant = { name: 'tester'};
//act
applicantApi.save(applicant);
const result = applicantApi.get();
//assert
assert.deepEqual(result, applicant);

});