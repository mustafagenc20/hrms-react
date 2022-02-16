import axios from "axios";

export default class JobExperienceService {

    addJobExperience(jobExperience) {
        return axios.post(`http://localhost:8081/controller/jobexperiences/addJobExperience`, jobExperience)
    }

    updateJobExperience(experienceId, jobExperience) {
        return axios.put(`http://localhost:8081/controller/jobexperiences/updateJobExperience?experienceId=${experienceId}`, jobExperience)
    }

    deleteJobExperience(jobExperienceId) {
        return axios.delete(`http://localhost:8081/controller/jobexperiences/deleteJobExperience?experienceId=${jobExperienceId}`)
    }

    getByUnemployedIdOrderByLeaveDate(unemployedId) {
        return axios.get(`http://localhost:8081/controller/jobexperiences/getByUnemployedIdOrderByLeaveDate?unemployedId=${unemployedId}`)
    }
}