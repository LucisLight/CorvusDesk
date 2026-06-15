function LoginMessage({
  message,
  type
}) {

  if (!message) {

    return null;
  }

  const isError =
    type === "error";

  return (

    <div
      style={{
        backgroundColor: isError
          ? "#ffe0e0"
          : "#d9ffd9",
        border: isError
          ? "1px solid #cc4444"
          : "1px solid green",
        color: isError
          ? "#8a1f1f"
          : "#206020",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "20px",
        fontWeight: "bold"
      }}
    >
      {message}
    </div>
  );
}

export default LoginMessage;