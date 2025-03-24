const TOKEN = "TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";

const API_BASE_URL = "http://localhost:5000/api/v1";

const API_ROUTE = {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/register",
    REFRESH_TOKEN: "/auth/refresh-token",
};

const LOCATION = {
    HOME: "/",
    LOGIN: "/login",
    SIGNUP: "/sign-up",
    NOTFOUND: "*",
};

export { TOKEN, API_BASE_URL, API_ROUTE, LOCATION, REFRESH_TOKEN };
