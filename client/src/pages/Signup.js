import React, { useState } from "react";
import ContactWrapper from "../components/contactWrapper";
import SignupForm from "../components/SignupForm";
import "./join.css";
import api from "../utils/api";

function Signup() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const handleSave = (event) => {
    event.preventDefault();
    api.signup(userInfo).then((results) => {
      console.log(results);
      window.location.href="/search"
    });
  };

  return (
    <ContactWrapper>
      <SignupForm
        handleInputChange={handleInputChange}
        handleSave={handleSave}
        userInfo={userInfo}
      />
    </ContactWrapper>
  );
}

export default Signup;
