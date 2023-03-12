import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://spookywy.pythonanywhere.com/api/",
    timeout: 20000,
});

export const rawApiClient = axios.create({
    timeout: 20000,
});

export default apiClient;
