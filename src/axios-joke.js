import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://joker-loader-default-rtdb.firebaseio.com/"
});
export default axiosInstance;