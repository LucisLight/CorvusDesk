function CreateOwnerForm({
  createData,
  handleCreateChange,
  handleCreateSubmit
}) {

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid lightpink"
  };

  return (

    <form onSubmit={handleCreateSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={createData.name}
        onChange={handleCreateChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={createData.email}
        onChange={handleCreateChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={createData.phone}
        onChange={handleCreateChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="userName"
        placeholder="Username"
        value={createData.userName}
        onChange={handleCreateChange}
        style={inputStyle}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={createData.password}
        onChange={handleCreateChange}
        style={{
          ...inputStyle,
          marginBottom: "20px"
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
  );
}

export default CreateOwnerForm;