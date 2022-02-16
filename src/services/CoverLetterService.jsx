import axios from "axios";

export default class CoverLetterService {

    addCoverLetter(coverLetter) {
        return axios.post(`http://localhost:8081/controller/coverletters/addCoverLetter`, coverLetter)
    }

    updateCoverLetter(coverLetter) {
        return axios.put(`http://localhost:8081/controller/coverletters/updateCoverLetter`, coverLetter)
    }

    getByUnemployedId(unemployedId) {
        return axios.get(`http://localhost:8081/controller/coverletters/getByUnemployedId?unemployedId=${unemployedId}`)
    }
}