import axios from "axios";

export default class UnemployedService {
    
    getUnemployeds() {
        return axios.get("http://localhost:8081/controller/unemployeds/getall")
    }

    getMailIsVerifyTrue() {
        return axios.get("http://localhost:8081/controller/unemployeds/getMailIsVerifyTrue")
    }

    getByUserId(userId) {
        return axios.get(`http://localhost:8081/controller/unemployeds/getByUserId?userId=${userId}`)
    }

    createCv(unemployedId) {
        return axios.get(`http://localhost:8081/controller/unemployeds/createCv?unemployedId=${unemployedId}`)
    }
}