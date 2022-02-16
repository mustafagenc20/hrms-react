import axios from "axios";

export default class TechnologyService {
    addTechnology(technology) {
        return axios.post("http://localhost:8081/controller/technologies/addTechnology", technology)
    }
    deleteTechnology(technologyId) {
        return axios.delete(`http://localhost:8081/controller/technologies/deleteTechnology?technologyId=${technologyId}`)
    }
    updateTechnology(technology, technologyId) {
        return axios.put(`http://localhost:8081/controller/technologies/updateTechnology?technologyId=${technologyId}`, technology)
    }
    getByUnemployedId(unemployedId) {
        return axios.get(`http://localhost:8081/controller/technologies/getByUnemployedId?unemployedId=${unemployedId}`)
    }
}