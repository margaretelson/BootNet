import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomCard from "../CustomCard"

const AllUsers = () => {
    const [users, setUsers] = useState([])
    useEffect( () => {
        console.log(users)
        if (users.length === 0){ 
    axios.get("/api/users")
    .then( (users)=> {
        console.log(users)
        setUsers(users.data)
    })
}
    },[users])
    return(
        <div>
            {users.length > 0 &&
            users.map((user) => {
                return(
                    <CustomCard alumn={user} />
                )
            })}
        </div>
    )
}

export default AllUsers