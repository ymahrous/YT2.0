import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '8bb2697c1cmsh95241205f99e0bep19f1e7jsnd818703d3f65',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
}

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}