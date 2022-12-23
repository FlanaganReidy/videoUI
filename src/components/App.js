import React, {useState} from "react";
import youtube from '../apis/youtube';
import { ActiveVideo } from "./ActiveVideo";
import {SearchBar} from './SearchBar'
import { VideoList } from "./VideoList";


export const App = () => {

    const [videos, setVideos] = useState([]);
    const[activeVideo, setActiveVideo] = useState("")
    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });
       setVideos(response.data.items)
    }
    const setActiveHandler = (videoToActive) => {
        setActiveVideo(videoToActive.id.videoId)
    }
    return(
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui segment padded two column grid">
            <ActiveVideo activeVideo={activeVideo}/>
            <VideoList videos={videos} setActiveHandler={setActiveHandler}/>
            </div>
        </div>
    );
}