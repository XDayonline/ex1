import React from "react";

function Searchbar({value, handleChange}) {
    return (
        <div className="searchbar" style={{marginBottom:"1em"}}>
            <label style={{marginRight: "1em"}} htmlFor="search-bar"/>
            <input id="search-bar" type="text" placeholder="Rechercher..." value={value} onChange={handleChange}/>
        </div>
    )
}

export default Searchbar;
