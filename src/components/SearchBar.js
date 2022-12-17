import React, { useState } from "react";

export const SearchBar = () => {
    const [term, setTerm] = useState('');

    const handleInputChange = (e) => {
        setTerm(e.target.value);
        console.log(term)
    }
    const onFormSubmit = (e) => {
        e.preventDefault();

        
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