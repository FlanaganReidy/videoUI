import React from "react";

export const VideoDetail = ({selectedVideo}) => {

    return(
    <div>
        {selectedVideo ?
            <div className="ui container">
                <iframe src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}/>
                <div className="content">
                    <div className="header">
                        {selectedVideo.snippet.title}
                    </div>
                    <div className="description">
                        {selectedVideo.snippet.description}
                    </div>
                </div>
            </div> : "No Video Selected"}
    </div> 
    )
}