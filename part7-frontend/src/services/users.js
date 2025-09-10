import axios from "axios";
const baseUrl = "/api/users";

export const getAll = async () => {
    const res = await axios.get(baseUrl);
    console.log("users.getAll res: ", res.data);
    return res.data;
};

export default {};
