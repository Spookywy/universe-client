import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://spookywy.pythonanywhere.com/api/",
    timeout: 7000,
});

export default apiClient;