const applicantApi = {
    storage: localStorage,

    save(applicant) {
        const applicants = applicantApi.getAll();
        applicants.push(applicant);
        const json = JSON.stringify(applicants);
        applicantApi.storage.setItem('applicants', json);
        console.log(applicants, 'API');
    },
    get() {
        //const json = localStorage.getItem('applicant');
        const applicants = applicantApi.getAll();
        return applicants[0];
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