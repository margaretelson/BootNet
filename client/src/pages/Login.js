import React from "react";
import LoginWrapper from "../components/LoginWrapper";
import FormCard from "../components/FormCard";
import WelcomeCard from "../components/WelcomeCard";
import "./join.css"



const Login = () => {
  return (
<LoginWrapper>
  <WelcomeCard/>
  <FormCard/>
</LoginWrapper>

  );
};

export default Login;
