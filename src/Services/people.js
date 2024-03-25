import axios from "axios";


export const getPeople = async () => {
    try {
        const response = await axios.get('https://be.cvgo.my.id/');
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}