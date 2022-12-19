import axios from 'axios';

const PUBLIC_API_KEY = 'AIzaSyCWz_Wg4DOryzoH87Z1-FwVUB9lPwFWLyo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults:'5',
        key:PUBLIC_API_KEY
    }
})