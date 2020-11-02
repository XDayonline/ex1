import React from "react";
import {Link} from "react-router-dom";

function Row({user}) {
    return (
        <tr className="row-user">
            <th>
                <Link to={`/user/${user.login.uuid}`} className="">
                    <img className="img-thumbnail" alt="people" src={user.picture.thumbnail}/>
                </Link>
            </th>
            <th><Link to={`/user/${user.login.uuid}`}>{user.name.first} {user.name.last}</Link></th>
            <th><Link to={`/user/${user.login.uuid}`}>{user.email}</Link></th>
            <th><Link to={`/user/${user.login.uuid}`}>{user.phone}</Link></th>
        </tr>
    )
}

export default Row;
