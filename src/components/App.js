import React, {useState} from "react";
import youtube from '../apis/youtube';
import {SearchBar} from './SearchBar'
import { VideoList } from "./VideoList";
import { VideoDetail } from "./VideoDetail";


export const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState();

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });
       setVideos(response.data.items)
    }
    const onVideoSelect = (aVideo) => {
        setSelectedVideo(aVideo);
        console.log(selectedVideo);
    }

    return(
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <VideoDetail selectedVideo={selectedVideo} />
            <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
        </div>
    );
}