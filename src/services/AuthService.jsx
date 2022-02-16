import axios from "axios";

export default class AuthService {
    
    registerEmployer(confirmPassword,employer) {
        return axios.post(`http://localhost:8081/controller/auth/registerEmployer?confirmPassword=${confirmPassword}`, employer)
    }

    registerUnemployed(confirmPassword, unemployed) {
        return axios.post(`http://localhost:8081/controller/auth/registerUnemployed?confirmPassword=${confirmPassword}`, unemployed)
    }
    
    login(login) {
        return axios.post(`http://localhost:8081/controller/auth/login`, login)
    }
}