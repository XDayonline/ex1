import React from "react";
import Row from "./Row";
import {Button} from 'react-bootstrap';

function Array({users, sortByName, sortByEmail, sortByPhone}) {
    return (
        <table id="tbl-users" className="table table-hover text-center table-striped">
            <thead className="thead-dark">
            <tr>
                <th/>
                <th>
                    <span style={{marginRight: "1em"}}>Nom</span>
                    <Button size="sm" variant="outline-light" onClick={sortByName}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </Button>
                </th>
                <th>
                    <span style={{marginRight: "1em"}}>Email</span>
                    <Button size="sm" variant="outline-light" onClick={sortByEmail}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </Button>
                </th>
                <th>
                    <span style={{marginRight: "1em"}}>Téléphone</span>
                    <Button size="sm" variant="outline-light" onClick={sortByPhone}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </Button>
                </th>
            </tr>
            </thead>

            <tbody>
            {users.map((user) => {
                return (
                    <Row user={user} key={user.login.uuid}/>
                )
            })}
            </tbody>
        </table>
    )
}

export default Array;
