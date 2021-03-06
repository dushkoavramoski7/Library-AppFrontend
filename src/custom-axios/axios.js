import axios from "axios";

const instance = axios.create({
    baseURL: 'https://library-order-book-be.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*',
    }
})

export default instance;
