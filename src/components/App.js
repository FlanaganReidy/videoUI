import React from "react";
import youtube from '../apis/youtube';
import {SearchBar} from './SearchBar'

export const App = () => {
    const onTermSubmit = (term) => {
        youtube.get('/search', {
            params:{
                q: term
            }
        });

    }
    return(
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
        </div>
    );
}