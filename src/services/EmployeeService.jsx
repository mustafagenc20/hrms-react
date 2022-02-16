import axios from "axios";

export default class EmployeeService {

    addEmployee(employee) {
        return axios.post(`http://localhost:8081/controller/employees/addEmployee`, employee)
    }

    updateEmployee(employeeId, employee) {
        return axios.put(`http://localhost:8081/controller/employees/updateEmployee?employeeId=${employeeId}`, employee)
    }

    deleteEmployee(employeeId) {
        return axios.delete(`http://localhost:8081/controller/employees/deleteEmployee?employeeId=${employeeId}`)
    }

    getByUserId(employeeId) {
        return axios.get(`http://localhost:8081/controller/employees/getByUserId?userId=${employeeId}`)
    }

    getAllEmployee() {
        return axios.get(`http://localhost:8081/controller/employees/getAll`)
    }


}