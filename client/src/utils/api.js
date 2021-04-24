import axios from "axios";

export default {
    signup: function (userInfo){
        return axios.post("/api/register", userInfo)
    },
    signin: function (userInfo){
        return axios.post("/api/login", userInfo)
    },
    signout: function(){
        return axios.get("/api/logout")
    },
    getCurrentUser: function(){
        return axios.get("/api/user")
    }
}

