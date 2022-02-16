import axios from "axios";

export default class EmployerService {

    getAllEmployers() {
        return axios.get("http://localhost:8081/controller/employers/getall")
    }

    getByMailIsVerifyTrue() {
        return axios.get("http://localhost:8081/controller/employers/getByMailIsVerifyTrue")
    }

    getByUserId(employerId) {
        return axios.get(`http://localhost:8081/controller/employers/getByUserId?userId=${employerId}`)
    }

    updateEmployer(employerUpdate) {
        return axios.put(`http://localhost:8081/controller/employers/updateEmployer`, employerUpdate)
    }
}