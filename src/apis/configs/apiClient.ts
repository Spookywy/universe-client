import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://spookywy.pythonanywhere.com/api/",
    timeout: 20000,
});

export const rawApiClient = (url: string) => {
    return axios
        .get(url, {
            timeout: 20000,
        })
        .then((res) => res.data);
};

export default apiClient;
