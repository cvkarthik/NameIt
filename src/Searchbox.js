import React from "react";

const Searchbox = ({ handleInputChange }) => {
    return (
        <div className="search-container">
            <input onChange={(event) => {
                handleInputChange(event.target.value)
            }} placeholder="Type keyword" className="search-input" />
        </div>
    );
};

export default Searchbox;