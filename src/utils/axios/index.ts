import axios from "axios";
import { API_BASE_URL, LOCATION, REFRESH_TOKEN, TOKEN } from "../constants";
import { isTokenExpired, refreshAccessToken } from "../token";

const axiosClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem(TOKEN);
    const refreshT = localStorage.getItem(REFRESH_TOKEN);

    if (refreshT && isTokenExpired(refreshT)) {
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);

        window.location.href = LOCATION.LOGIN;
        throw new Error("Refresh token expired. Redirecting to login.");
    }

    if (token && refreshT && isTokenExpired(token)) {
        const { token, refreshToken } = await refreshAccessToken(refreshT);

        if (token) {
            localStorage.setItem(TOKEN, token);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    if (token && !isTokenExpired(token)) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosClient;
