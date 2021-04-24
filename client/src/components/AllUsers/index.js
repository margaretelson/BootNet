import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomCard from "../CustomCard"

const AllUsers = () => {
    const [users, setUsers] = useState([])
    useEffect( () => {
        console.log(users)
    axios.get("/api/users")
    .then((response)=> {
        console.log(response)
        setUsers(response.data)
    })
}, [])

    return(
        <div>
            {users.length > 0 &&
            users.map((user) => {
                let userDetail = {
                    avatar_url: user.avatar_url,
                    login: user.login,
                    url: user.url,
                    hireable: user.hireable,
                    bio: user.bio,
                    company: user.company,
                    email: user.email

                }
                console.log(userDetail)

                return(
                    <CustomCard alumn={userDetail}
                    />
                )
            })}
        </div>
    )
}

export default AllUsers