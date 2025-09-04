import axios from 'axios';

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/'

export const getAll = async () =>
{
    const res = await axios.get(`${baseURL}api/all`);
    return res.data;
}

export const getCountry = async (name) =>
{
    const res = await axios.get(`${baseURL}api/name/${name}`);
    return res;
}

export default getAll;
