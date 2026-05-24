import { useState, useEffect } from "react";

function CreateTicketPage({ fetchTickets, setCurrentPage }) {

  const [errorMessage, setErrorMessage] = useState("");

  const [owners, setOwners] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requesterName: "",
    requesterEmail: "",
    requesterPhone: "",
    category: "",
    priority: "",
    ownerId: "",
    ownerName: "",
    ownerEmail: "",
    ownerPhone: ""
  });

  useEffect(() => {

    fetchOwners();

  }, []);

  const fetchOwners = async () => {

    const response = await fetch("http://localhost:8080/owners");

    const data = await response.json();

    setOwners(data);
  };

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    const response = await fetch("http://localhost:8080/tickets/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {

      setErrorMessage("All required fields must be filled out.");

      return;
    }

    setErrorMessage("");

    fetchTickets();

    setFormData({
      title: "",
      description: "",
      requesterName: "",
      requesterEmail: "",
      requesterPhone: "",
      category: "",
      priority: "",
      ownerId: "",
      ownerName: "",
      ownerEmail: "",
      ownerPhone: ""
    });
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
        Create Ticket
      </h1>

      {errorMessage && (

        <p
          style={{
            color: "red"
          }}
        >
          {errorMessage}
        </p>

      )}

      <form onSubmit={handleSubmit}>

        <p>Name</p>

        <input
          type="text"
          name="requesterName"
          value={formData.requesterName}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <p>Email</p>

        <input
          type="text"
          name="requesterEmail"
          value={formData.requesterEmail}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <p>Phone</p>

        <input
          type="text"
          name="requesterPhone"
          value={formData.requesterPhone}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <p>Category</p>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px"
          }}
        >

          <option value="">
            Select Category
          </option>

          <option value="Network">
            Network
          </option>

          <option value="Personal Computing">
            Personal Computing
          </option>

          <option value="Email">
            Email
          </option>

          <option value="Phone">
            Phone
          </option>

        </select>

        <p>Priority</p>

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px"
          }}
        >

          <option value="">
            Select Priority
          </option>

          <option value="Low">
            Low
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="High">
            High
          </option>

          <option value="Critical">
            Critical
          </option>

        </select>

        <p>Owner</p>

        <select
          name="ownerId"
          value={formData.ownerId}
          onChange={(event) => {

            const selectedOwner = owners.find(
              (owner) => owner.ownerId === event.target.value
            );

            if (!selectedOwner) {

              return;
            }

            setFormData({
              ...formData,
              ownerId: selectedOwner.ownerId,
              ownerName: selectedOwner.name,
              ownerEmail: selectedOwner.email,
              ownerPhone: selectedOwner.phone
            });

          }}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        >

          <option value="">
            Select Owner
          </option>

          {owners.map((owner) => (

            <option
              key={owner.ownerId}
              value={owner.ownerId}
            >
              {owner.name}
            </option>

          ))}

        </select>

        <button
          type="button"
          onClick={() => setCurrentPage("addOwner")}
          style={{
            marginBottom: "15px",
            backgroundColor: "#f7d7e6",
            border: "1px solid #d94f8a",
            padding: "6px 12px",
            cursor: "pointer"
          }}
        >
          + New Owner
        </button>

        <p>Title</p>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <p>Description</p>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{
            width: "100%",
            height: "120px",
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
          Submit
        </button>

      </form>

    </div>
  );
}

export default CreateTicketPage;