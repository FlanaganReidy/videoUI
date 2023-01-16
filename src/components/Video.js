import React from "react";
import './video.css';

export const Video = ({videoInfo, onVideoSelect}) => {
    
    const handleClick = () => {
        onVideoSelect(videoInfo);
    }

    return(
        <div className="item video-item" onClick={handleClick} >
            <img className="ui image" src={videoInfo.snippet.thumbnails.default.url}/>
            <div className="content">
                <div className="header">{videoInfo.snippet.title}</div>
            </div>
            
        </div>
        
    )
}