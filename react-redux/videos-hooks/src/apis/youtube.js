// NOTE: stop server in terminal and run: 
// $ npm install --save axios 
// in order to enable axios for this app
import axios from 'axios';

const KEY = 'AIzaSyDzFqbqfcktzP1pPbjYOHvEXQDdZH6GR9M'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5, 
        key: KEY
    }
});