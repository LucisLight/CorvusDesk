import { useState } from "react";

function LoginPage({
  setIsLoggedIn,
  setCurrentOwner
}) {

  const [isCreatingOwner, setIsCreatingOwner] =
    useState(false);

  const [loginData, setLoginData] = useState({
    userName: "",
    password: ""
  });

  const [createData, setCreateData] = useState({
    name: "",
    email: "",
    phone: "",
    userName: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

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

    setErrorMessage("");
    setSuccessMessage("");

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

    setErrorMessage("");
    setSuccessMessage("");

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

  return (

    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom, #fff5fa, #ffe3ef)"
    }}>

      <div style={{
        backgroundColor: "white",
        padding: "60px",
        borderRadius: "24px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        textAlign: "center",
        width: "500px"
      }}>

        <img
          src="/corvus-logo.png"
          alt="CorvusDesk Logo"
          style={{
            width: "420px",
            marginBottom: "20px"
          }}
        />

        <h2 style={{
          color: "#d94f8a",
          marginBottom: "20px"
        }}>
          {isCreatingOwner
            ? "Create Owner Login"
            : "Owner Login"}
        </h2>

        {errorMessage && (

          <div style={{
            backgroundColor: "#ffe0e0",
            border: "1px solid #cc4444",
            color: "#8a1f1f",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "20px",
            fontWeight: "bold"
          }}>
            {errorMessage}
          </div>

        )}

        {successMessage && (

          <div style={{
            backgroundColor: "#d9ffd9",
            border: "1px solid green",
            color: "#206020",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "20px",
            fontWeight: "bold"
          }}>
            {successMessage}
          </div>

        )}

        {!isCreatingOwner ? (

          <form onSubmit={handleLoginSubmit}>

            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={loginData.userName}
              onChange={handleLoginChange}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "14px",
                borderRadius: "10px",
                border: "1px solid lightpink"
              }}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                borderRadius: "10px",
                border: "1px solid lightpink"
              }}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#d94f8a",
                color: "white",
                border: "none",
                padding: "16px 40px",
                fontSize: "18px",
                borderRadius: "12px",
                cursor: "pointer",
                width: "100%"
              }}
            >
              Login
            </button>

          </form>

        ) : (

          <form onSubmit={handleCreateSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={createData.name}
              onChange={handleCreateChange}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "10px",
                border: "1px solid lightpink"
              }}
            />

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={createData.email}
              onChange={handleCreateChange}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "10px",
                border: "1px solid lightpink"
              }}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={createData.phone}
              onChange={handleCreateChange}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "10px",
                border: "1px solid lightpink"
              }}
            />

            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={createData.userName}
              onChange={handleCreateChange}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "10px",
                border: "1px solid lightpink"
              }}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={createData.password}
              onChange={handleCreateChange}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                borderRadius: "10px",
                border: "1px solid lightpink"
              }}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#d94f8a",
                color: "white",
                border: "none",
                padding: "16px 40px",
                fontSize: "18px",
                borderRadius: "12px",
                cursor: "pointer",
                width: "100%"
              }}
            >
              Create Owner and Login
            </button>

          </form>

        )}

        <button
          onClick={() => {
            setIsCreatingOwner(!isCreatingOwner);
            setErrorMessage("");
            setSuccessMessage("");
          }}
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