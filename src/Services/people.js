import axios from "axios";


export const getPeople = async () => {
    try {
        const response = await axios.get('https://ontheklik.my.id/src-backend/public/ilham-sidik-saksena');
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}