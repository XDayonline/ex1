import React from "react";
import Searchbar from "./Searchbar";
// import { Button } from 'react-bootstrap';

function Header({onFetchClick, value, handleChange}) {
    return (
        <div className="header">
            <h1>Tableau</h1>
            {/*<Button onClick={onFetchClick}>Fetch</Button>*/}
            <Searchbar value={value} handleChange={handleChange}/>
        </div>
    )
}

export default Header;
