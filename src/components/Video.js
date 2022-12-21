import React from "react";

export const Video = ({videoId}) => {
    return(
        <iframe src={`https://www.youtube.com/embed/${videoId}`}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
    )
}