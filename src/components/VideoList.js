import React from "react";
import {Video} from "./Video";

export const VideoList = ({videos, setActiveHandler}) => {
const renderedList = videos.map((video, key)=>{
    return(
        <div key={key} className="ui list">
            {console.log(video)}
            <Video videoInfo={video} setActiveHandler={setActiveHandler}/>
        </div>
)})

    return(
        <div>
            {renderedList}
        </div>
    )
}