import React from "react";
import {Link, useParams} from "react-router-dom";

function User({users}) {
    const {userId} = useParams();
    const user = users.find((user) => user.login.uuid === userId)

    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="container d-flex justify-content-center">
                    <div className="col-xl-6 col-md-12">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                    <div className="card-block text-center text-white">
                                        <div className="m-b-25"><img
                                            src={user.picture.large}
                                            className="img-radius" alt="User-Profile-Image"/></div>
                                        <h6 className="f-w-600">{user.name.first} {user.name.last}</h6>
                                        <p>{user.location.city}</p> <i
                                        className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"/>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Email</p>
                                                <h6 className="text-muted f-w-400">{user.email}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Phone</p>
                                                <h6 className="text-muted f-w-400">{user.phone}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;
