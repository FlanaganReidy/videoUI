import axios from 'axios';
import config from '../config/config';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults:'5',
        key:config.PUBLIC_API_Key
    }
})