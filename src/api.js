import axios from 'axios'
import { store } from './redux/store';

const request = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        // maxResults: 10

    },
    headers: { 'Authorization': `Bearer ${store.getState().auth.accessToken}` }

    // headers: { Authorization: `Bearer ${store.getState().accessToken}` }

})

export default request;