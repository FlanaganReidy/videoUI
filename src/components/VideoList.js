import React from "react";
import {Video} from "./Video";

export const VideoList = ({videos}) => {
const renderedList = videos.map((video, key)=>{
    return(
        <div key={key}>
            <Video videoId={video.id.videoId}/>
        </div>
)})

    return(
        <div>
            {renderedList}
        </div>
    )
}