import axios from "axios";

export default class PositionService {
    addPositions(position) {
        return axios.post("http://localhost:8081/controller/positions/addPosition", position)
    }
}