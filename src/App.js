import React, {useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import User from "./Components/User";
import axios from "axios";
import Header from "./Components/Header";
import Array from "./Components/Array";

//API
const fetchUsers = (nbUsers) => {
    return axios.get('https://randomuser.me/api/?results=' + nbUsers)
        .then(({data: {results}}) => {
            console.log(results);
            return results;
        })
        .catch((e) => {
            console.error(e)
        })
        .finally(() => {
                console.log("Fetched")
            }
        )
};

function App() {
    const [users, setUsers] = useState([]);
    const [sortByName, setSortByName] = useState(false);
    const [sortByEmail, setSortByEmail] = useState(false);
    const [sortByPhone, setSortByPhone] = useState(false);
    const [value, setValue] = useState("");
    const [filterDisplay, setFilterDisplay] = useState([]);
    // const handleFetchClick = () =>
    //     fetchUsers(10).then((newUsers)=>setUsers(oldUsers=>[...oldUsers, ...newUsers]));

    //Get API
    useEffect(() => {
        fetchUsers(20).then((newUsers) => setUsers(oldUsers => [...oldUsers, ...newUsers]));
    }, []);

    function handleChange(event) {
        setValue(event.target.value);
    }

    //Filters
    useEffect(() => {
        const results = users.filter(user =>
            user.name.first.toLowerCase().includes(value.toLowerCase()) ||
            user.name.last.toLowerCase().includes(value.toLowerCase())
        );
        setFilterDisplay(results);
    }, [users, value]);

    function toggleSortByName() {
        if (sortByName === false) setSortByName(true);
        else setSortByName(false)
    }

    function toggleSortByEmail() {
        if (sortByEmail === false) setSortByEmail(true);
        else setSortByEmail(false)
    }

    function toggleSortByPhone() {
        if (sortByPhone === false) setSortByPhone(true);
        else setSortByPhone(false)
    }

    //Sorts
    useEffect(() => {
        let res = [];
        if (sortByName === true) {
            res = [].concat(users).sort((a, b) => a.name.first > b.name.first ? 1 : -1);
        }
        if (sortByName === false) {
            res = [].concat(users).sort((a, b) => a.name.first < b.name.first ? 1 : -1);
        }
        setUsers(res);
    }, [sortByName]);

    useEffect(() => {
        let res = [];
        if (sortByEmail === true) {
            res = [].concat(users).sort((a, b) => a.email > b.email ? 1 : -1);
        }
        if (sortByEmail === false) {
            res = [].concat(users).sort((a, b) => a.email < b.phone ? 1 : -1);
        }
        setUsers(res);
    }, [sortByEmail]);

    useEffect(() => {
        let res = [];
        if (sortByPhone === true) {
            res = [].concat(users).sort((a, b) => a.phone > b.phone ? 1 : -1);
        }
        if (sortByPhone === false) {
            res = [].concat(users).sort((a, b) => a.phone < b.phone ? 1 : -1);
        }
        setUsers(res);
    }, [sortByPhone]);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path={"/"} exact>
                        <div>
                            <Header value={value} handleChange={handleChange}/>
                            <Array users={value < 1 ? users : filterDisplay} sortByName={toggleSortByName}
                                   sortByEmail={toggleSortByEmail} sortByPhone={toggleSortByPhone}/>
                        </div>
                    </Route>
                    <Route path={"/user/:userId"} component={() => <User users={users} />}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
