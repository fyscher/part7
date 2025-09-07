import axios from "axios";
const baseUrl = "/api/blogs";

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const res = await axios.post(baseUrl, newObject, config);
  return res.data;
};

const update = async (id, newObject) => {
  const res = await axios.put(`${baseUrl}/${id}`, newObject);
  return res.data;
};

const remove = async (id) => {
  console.log("url: ", `${baseUrl}/${id}`);
  const res = await axios.delete(`${baseUrl}/${id}`);
  return res.data;
};

export default { getAll, create, update, remove };
