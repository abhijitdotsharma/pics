import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID _M1pd2xPjXgsQJOI4qakk2uZPp8o6MuNH36dMeqHSpU'
    }
});