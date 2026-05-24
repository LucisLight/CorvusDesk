function LoginPage({ setIsLoggedIn }) {

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

        <button
          onClick={() => setIsLoggedIn(true)}
          style={{
            backgroundColor: "#d94f8a",
            color: "white",
            border: "none",
            padding: "16px 40px",
            fontSize: "18px",
            borderRadius: "12px",
            cursor: "pointer"
          }}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default LoginPage;