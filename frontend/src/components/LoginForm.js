function LoginForm({
  loginData,
  handleLoginChange,
  handleLoginSubmit
}) {

  return (

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
  );
}

export default LoginForm;