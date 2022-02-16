import axios from "axios";

export default class LinkService {

    addLink(link) {
        return axios.post(`http://localhost:8081/controller/links/addLink`, link)
    }

    updateLink(link) {
        return axios.put(`http://localhost:8081/controller/links/updateLink`, link)
    }

    getByUnemployedId(unemployedId) {
        return axios.get(`http://localhost:8081/controller/links/getByUnemployed?unemployedId=${unemployedId}`)
    }
}