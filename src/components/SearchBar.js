import React, { useState } from "react";

export const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const handleInputChange = (e) => {
        setTerm(e.target.value);
        
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onFormSubmit(term);
        
    };

    return(
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit}className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term} 
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    );
}