import React, {useState} from "react";
import LoginWrapper from "../components/LoginWrapper";
import FormCard from "../components/FormCard";
import WelcomeCard from "../components/WelcomeCard";
import "./join.css"
import api from "../utils/api"


const Login = () => {
  const [userInfo, setUserInfo] = useState({

    username: "",
    password: "",
   
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    api.signin(userInfo).then((results) => {
      console.log(results);
      window.location.href="/search"
    });
  };

  return (
<LoginWrapper>
  <WelcomeCard/>
  <FormCard 
  handleInputChange={handleInputChange}
  handleLogin={handleLogin}
  userInfo={userInfo}/>
</LoginWrapper>

  );
};

export default Login;
