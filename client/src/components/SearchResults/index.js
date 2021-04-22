import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomCard from "../CustomCard"
import AllUsers from "../AllUsers"

const SearchResults = () => {
    return(
        <div>
            {users.length > 0 &&
            users.map((user) => {
                return(
                    <CustomCard />
                )
            })}
        </div>
    )
}

export default SearchResults