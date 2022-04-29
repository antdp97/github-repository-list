import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        accept: "application/vnd.github.v3+json"
    },
    // timeout: 50000
})



const responseBody = (response) => {
    return response.data;
}

const requests  = {
    get: (url) => instance.get(url).then(responseBody)
}

// ins.interceptors.request.use((request) => {
//     request.headers.Authorization = localStorage.getItem('token')
//
//     return request
// })

export default requests;
