import axios from "axios";

export default function axiosWithAuth() {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {Authorization : token}
    })
}


//Task List:
//Build and export a function used to send in our authorization token Completed