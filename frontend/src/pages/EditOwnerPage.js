import { useState } from "react";

function EditOwnerPage({
  selectedOwner,
  setSelectedOwner,
  setCurrentPage
}) {

  const [successMessage, setSuccessMessage] =
    useState("");

  const [formData, setFormData] = useState({
    name: selectedOwner.name || "",
    email: selectedOwner.email || "",
    phone: selectedOwner.phone || "",
    userName: selectedOwner.userName || "",
    password: selectedOwner.password || "",
    clearanceLevel: selectedOwner.clearanceLevel || "General"
  });

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    await fetch(
      `http://localhost:8080/owners/${selectedOwner.ownerId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    setSuccessMessage(
      "Owner updated successfully!"
    );

    setTimeout(() => {

      setSelectedOwner(null);

      setCurrentPage("owners");

    }, 2400);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px"
  };

  return (

    <div
      style={{
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "12px",
        border: "1px solid lightpink",
        width: "700px"
      }}
    >

      <h1
        style={{
          color: "#d94f8a"
        }}
      >
        Edit Owner
      </h1>

      {successMessage && (

        <div
          style={{
            backgroundColor: "#d9ffd9",
            border: "1px solid green",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "20px",
            color: "#206020",
            fontWeight: "bold"
          }}
        >
          ✓ {successMessage}
        </div>

      )}

      <form onSubmit={handleSubmit}>

        <h2
          style={{
            color: "#d94f8a",
            marginTop: "10px"
          }}
        >
          Owner Contact Information
        </h2>

        <p>Name</p>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <p>Email</p>

        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <p>Phone</p>

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <h2
          style={{
            color: "#d94f8a",
            marginTop: "25px"
          }}
        >
          Login Information
        </h2>

        <p>Username</p>

        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          style={inputStyle}
        />

        <p>Password</p>

        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        />

        <h2
          style={{
            color: "#d94f8a",
            marginTop: "25px"
          }}
        >
          Clearance Information
        </h2>

        <p>Clearance Level</p>

        <select
          name="clearanceLevel"
          value={formData.clearanceLevel}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="Admin">
            Admin
          </option>

          <option value="Manager">
            Manager
          </option>

          <option value="Network">
            Network
          </option>

          <option value="Phone">
            Phone
          </option>

          <option value="General">
            General
          </option>
        </select>

        <br /><br />

        <button
          type="submit"
          style={{
            backgroundColor: "#f7d7e6",
            border: "1px solid #d94f8a",
            padding: "10px 20px",
            cursor: "pointer"
          }}
        >
          Save Changes
        </button>

      </form>

    </div>
  );
}

export default EditOwnerPage;