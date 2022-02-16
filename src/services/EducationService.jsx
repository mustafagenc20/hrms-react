import axios from "axios";

export default class EducationService {

    addEducation(education) {
        return axios.post(`http://localhost:8081/controller/educations/addEducations`, education)
    }

    updateEducation(educationId, education) {
        return axios.put(`http://localhost:8081/controller/educations/updateEducations?educationId=${educationId}`, education)
    }

    deleteEducation(educationId) {
        return axios.delete(`http://localhost:8081/controller/educations/deleteEducations?educationId=${educationId}`)
    }

    getByUnemployedIdOrderByGraduatedDate(unemployedId) {
        return axios.get(`http://localhost:8081/controller/educations/getByUnemployedIdOrderByGraduatedDate?unemployedId=${unemployedId}`)
    }
}