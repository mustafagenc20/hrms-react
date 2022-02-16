import axios from "axios";

export default class JobAdvertFavoriteService {

    addFavorite(advertId, unemployedId) {
        return axios.post(`http://localhost:8081/controller/jobAdvertFavorites/addFavorite?advertId=${advertId}&unemployedId=${unemployedId}`)
    }

    deleteFavorite(favoriteId) {
        return axios.delete(`http://localhost:8081/controller/jobAdvertFavorites/deleteFavorite?favoriteId=${favoriteId}`)
    }

    getByUnemployedId(unemployedId) {
        return axios.get(`http://localhost:8081/controller/jobAdvertFavorites/getByUnemployed?unemployedId=${unemployedId}`)
    }
}