import React from "react";

export const ActiveVideo = ({activeVideo}) => {
    return(
    <iframe width="70%" height="auto" src={`https://www.youtube.com/embed/${activeVideo}`}>
    </iframe>
    )
}