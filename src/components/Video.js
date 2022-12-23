import React from "react";

export const Video = ({videoInfo, setActiveHandler}) => {
    
    const onClickHandler = () => {
        setActiveHandler(videoInfo)
    }
    return(
        <div onClick={onClickHandler}>
            <img src={videoInfo.snippet.thumbnails.default.url} 
            alt={videoInfo.snippet.description}
            title={videoInfo.snippet.title}
        ></img>
        </div>
    )
}