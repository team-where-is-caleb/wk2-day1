const applicantApi = {
    save(applicant) {
        const json = JSON.stringify(applicant);
        localStorage.setItem('applicant', json);
    },
    get() {
        const json = localStorage.getItem('applicant');
        const applicant = JSON.parse(json);
        return applicant;
    },
    getAll() {

        const json = applicantApi.storage.getItem('applicants');
        let applicants = JSON.parse(json);
        if(!applicants) {
            applicants = [];
        }
        
        return applicants;
    }

};

export default applicantApi;