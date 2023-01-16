import React from "react";
import {Video} from "./Video";

export const VideoList = ({videos, onVideoSelect}) => {
const renderedList = videos.map((videoInfo, key)=>{
    return(
            <Video key={key} videoInfo={videoInfo} onVideoSelect={onVideoSelect}/>
)})
    return(
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}