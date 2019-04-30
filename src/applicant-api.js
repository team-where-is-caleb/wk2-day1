const applicantApi = {
    saveFunction(applicant) {
        const json = JSON.stringify(applicant);
        localStorage.setItem('applicant', json);
    },
    getFunction() {
        const json = localStorage.getItem('applicant');
        const applicant = JSON.parse(json);
        return applicant;
    }

};

export default applicantApi;