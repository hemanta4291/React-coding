import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://contact.mediusware.com/api-doc",
    mode: 'no-cors',
});

export default axiosInstance;