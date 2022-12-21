import React, {useState} from "react";
import youtube from '../apis/youtube';
import {SearchBar} from './SearchBar'
import { VideoList } from "./VideoList";


export const App = () => {

    const [videos, setVideos] = useState([]);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });
       setVideos(response.data.items)
    }
    return(
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <VideoList videos={videos} />
        </div>
    );
}