import axios from "axios"

export default class LittleService {

    /* Employment Type */
    getEmploymentTypes() {
        return axios.get("http://localhost:8081/controller/employmentTypes/getAll");
    }

    /* Employment Time */
    getEmploymentTimes() {
        return axios.get("http://localhost:8081/controller/employmentTimes/getAll");
    }

    /* City Service */
    getCities() {
        return axios.get("http://localhost:8081/controller/cities/getAllCities");
    }

    /* Position Service */
    getPositions() {
        return axios.get("http://localhost:8081/controller/positions/getall");
    }
}