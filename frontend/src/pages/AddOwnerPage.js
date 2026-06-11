import { useState } from "react";

function AddOwnerPage({
  setCurrentPage
}) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userName: "",
    password: ""
  });

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    await fetch("http://localhost:8080/owners/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    setCurrentPage("create");
  };

  return (

    <div style={{
      padding: "30px",
      backgroundColor: "white",
      borderRadius: "12px",
      border: "1px solid lightpink",
      width: "700px"
    }}>

      <h1 style={{
        color: "#d94f8a"
      }}>
        Add New Owner
      </h1>

      <form onSubmit={handleSubmit}>

        <p>Name</p>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <p>Email</p>

        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <p>Phone</p>

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <p>Username</p>

        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <p>Password</p>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

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
          Create Owner
        </button>

      </form>

    </div>
  );
}

export default AddOwnerPage;