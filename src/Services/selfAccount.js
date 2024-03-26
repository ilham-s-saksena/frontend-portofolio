import axios from 'axios';

export const getAccount = async () => {
    try {
        // Mendapatkan token dari localStorage
        const token = localStorage.getItem('token');
        
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const response = await axios.get('https://be.cvgo.my.id/v1/self/info', config);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}
