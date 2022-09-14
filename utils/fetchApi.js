import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '0e25be54f7mshe2ac289845d0b8ep14ae1bjsnf680622de262',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        },
    });
    return data;
};