import axios from 'axios'


export const getCharacters = async (url) => {
    const response = await axios.get(url)
    return response.data;
}