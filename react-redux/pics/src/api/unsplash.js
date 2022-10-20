import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID _KCjjtPwN3lhrAZGTkO0Boa188y84QMMhN2Ix1c7nKA'
    }
})