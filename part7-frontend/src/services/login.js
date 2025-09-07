import axios from "axios";
const baseUrl = "/api/login";

let token = null;
export const setToken = (newToken) => (token = `Bearer ${newToken}`);

const login = async (credentials) => {
    const res = await axios.post(baseUrl, credentials);
    return res.data;
};

export default { login };
