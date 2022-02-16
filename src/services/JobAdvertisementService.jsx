import axios from "axios";

export default class JobAdvertisementService {
    addJobAdvertisements(jobAdvertisement) {
        return axios.post("http://localhost:8081/controller/jobAdvertisements/addAdvertisement", jobAdvertisement)
    }

    getByApprovedAndFilter(pageNo, pageSize, advertFilter) {
        return axios.post(`http://localhost:8081/controller/jobAdvertisements/getByApprovedAndFilter?pageNo=${pageNo}&pageSize=${pageSize}`, advertFilter)
    }

    changeAdvertisementStatus(advertId, status) {
        return axios.put(`http://localhost:8081/controller/jobAdvertisements/changeAdvertisementStatus?advertId=${advertId}&status=${status}`)
    }

    getJobAdvertisements() {
        return axios.get("http://localhost:8081/controller/jobAdvertisements/getAll")
    }

    getByAdvertStatusTrue() {
        return axios.get("http://localhost:8081/controller/jobAdvertisements/getByAdvertStatusTrue")
    }

    getByAdvertIsConfirmed(status) {
        return axios.get(`http://localhost:8081/controller/jobAdvertisements/getByAdvertIsConfirmed?status=${status}`)
    }

    getByAdvertStatusFalseAndAdvertIsConfirmedTrueAndEmployerId(employerId) {
        return axios.get(`http://localhost:8081/controller/jobAdvertisements/getByAdvertStatusFalseAndAdvertIsConfirmedTrueAndEmployerId?employerId=${employerId}`)
    }

    getByAdvertStatusTrueAndEmployerId(employerId) {
        return axios.get(`http://localhost:8081/controller/jobAdvertisements/getByAdvertStatusTrueAndEmployerId?employerId=${employerId}`)
    }

    getByAdvertStatusAndAdvertIsConfirmedAndEmployerIdOrderByCreatedDate(employerId) {
        return axios.get(`http://localhost:8081/controller/jobAdvertisements/getByAdvertStatusAndAdvertIsConfirmedAndEmployerId?employerId=${employerId}`)
    }

    getByAdvertId(advertId) {
        return axios.get(`http://localhost:8081/controller/jobAdvertisements/getByAdvertId?advertId=${advertId}`)
    }
}