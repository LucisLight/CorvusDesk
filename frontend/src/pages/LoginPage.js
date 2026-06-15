import { useState } from "react";

import CreateOwnerForm from "../components/CreateOwnerForm";
import LoginForm from "../components/LoginForm";
import LoginMessage from "../components/LoginMessage";

function LoginPage({
  setIsLoggedIn,
  setCurrentOwner
}) {

  const [isCreatingOwner, setIsCreatingOwner] =
    useState(false);

  const [loginData, setLoginData] =
    useState({
      userName: "",
      password: ""
    });

  const [createData, setCreateData] =
    useState({
      name: "",
      email: "",
      phone: "",
      userName: "",
      password: "",
      clearanceLevel: "Admin"
    });

  const [errorMessage, setErrorMessage] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

  const clearMessages = () => {

    setErrorMessage("");

    setSuccessMessage("");
  };

  const handleLoginChange = (event) => {

    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  const handleCreateChange = (event) => {

    setCreateData({
      ...createData,
      [event.target.name]: event.target.value
    });
  };

  const handleLoginSubmit = async (event) => {

    event.preventDefault();

    clearMessages();

    try {

      const response = await fetch(
        "http://localhost:8080/owners/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(loginData)
        }
      );

      if (!response.ok) {

        throw new Error("Login failed");
      }

      const owner = await response.json();

      setCurrentOwner(owner);

      setIsLoggedIn(true);

    } catch (error) {

      setErrorMessage(
        "Invalid username or password."
      );
    }
  };

  const handleCreateSubmit = async (event) => {

    event.preventDefault();

    clearMessages();

    try {

      const response = await fetch(
        "http://localhost:8080/owners/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(createData)
        }
      );

      if (!response.ok) {

        throw new Error("Owner creation failed");
      }

      const owner = await response.json();

      setCurrentOwner(owner);

      setSuccessMessage(
        "Owner created successfully!"
      );

      setIsLoggedIn(true);

    } catch (error) {

      setErrorMessage(
        "Could not create owner."
      );
    }
  };

  const toggleCreateOwner = () => {

    setIsCreatingOwner(!isCreatingOwner);

    clearMessages();
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to bottom, #fff5fa, #ffe3ef)"
      }}
    >

      <div
        style={{
          backgroundColor: "white",
          padding: "60px",
          borderRadius: "24px",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
          width: "500px"
        }}
      >

        <img
          src="/corvus-logo.png"
          alt="CorvusDesk Logo"
          style={{
            width: "420px",
            marginBottom: "20px"
          }}
        />

        <h2
          style={{
            color: "#d94f8a",
            marginBottom: "20px"
          }}
        >
          {isCreatingOwner
            ? "Create Owner Login"
            : "Owner Login"}
        </h2>

        <LoginMessage
          message={errorMessage}
          type="error"
        />

        <LoginMessage
          message={successMessage}
          type="success"
        />

        {!isCreatingOwner ? (

          <LoginForm
            loginData={loginData}
            handleLoginChange={handleLoginChange}
            handleLoginSubmit={handleLoginSubmit}
          />

        ) : (

          <CreateOwnerForm
            createData={createData}
            handleCreateChange={handleCreateChange}
            handleCreateSubmit={handleCreateSubmit}
          />

        )}

        <button
          onClick={toggleCreateOwner}
          style={{
            marginTop: "18px",
            backgroundColor: "white",
            color: "#d94f8a",
            border: "1px solid #d94f8a",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          {isCreatingOwner
            ? "Back to Login"
            : "Create New Owner"}
        </button>

      </div>

    </div>
  );
}

export default LoginPage;