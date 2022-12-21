import axios from 'axios';
import {PUBLIC_API_KEY} from '../config/config';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults:'5',
        key:PUBLIC_API_KEY
    }
})