import axios from "axios";

const apiPaciente = axios.create({
    baseURL:'http://10.107.144.3:3000'
})

export default apiPaciente