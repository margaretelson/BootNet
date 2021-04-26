import axios from "axios";

export default {
    signup: function (userInfo){
        return axios.post("/api/auth/register", userInfo)
    },
    signin: function (userInfo){
        return axios.post("/api/auth/login", userInfo)
    },
    signout: function(){
        return axios.get("/api/auth/logout")
    },
    getCurrentUser: function(){
        return axios.get("/api/auth/user")
    }
}

