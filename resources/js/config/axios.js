import axios from 'axios'

let csrfToken = document.head.querySelector('meta[name="csrf-token"]');
let bearerToken = localStorage.getItem('userToken');

export default axios.create({
    baseURL: 'localhost:8000',
    headers: {
        'Content-Type': application/json,
        'X-Requested-With': XMLHttpRequest,
        'X-CSRF-TOKEN': csrfToken.content,
        'Authorization': 'Bearer' + ' ' + bearerToken 
    }
})