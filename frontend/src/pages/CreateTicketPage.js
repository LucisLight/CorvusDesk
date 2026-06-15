import { useEffect, useState } from "react";

import CreateRequesterFields from "../components/CreateRequesterFields";
import CreateTicketFields from "../components/CreateTicketFields";
import CreateTicketOwnerSelect from "../components/CreateTicketOwnerSelect";

const emptyTicketForm = {
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
};

function CreateTicketPage({
  fetchTickets,
  setCurrentPage
}) {

  const [successMessage, setSuccessMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const [owners, setOwners] =
    useState([]);

  const [formData, setFormData] =
    useState(emptyTicketForm);

  useEffect(() => {

    const fetchOwners = async () => {

      const response = await fetch(
        "http://localhost:8080/owners"
      );

      const data = await response.json();

      setOwners(data);
    };

    fetchOwners();

  }, []);

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    const response = await fetch(
      "http://localhost:8080/tickets/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    if (!response.ok) {

      setSuccessMessage("");

      setErrorMessage(
        "All required fields must be filled out."
      );

      return;
    }

    setErrorMessage("");

    setSuccessMessage(
      "Ticket created successfully!"
    );

    fetchTickets();

    setFormData(emptyTicketForm);
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

        <CreateRequesterFields
          formData={formData}
          handleChange={handleChange}
        />

        <CreateTicketFields
          formData={formData}
          handleChange={handleChange}
        />

        <CreateTicketOwnerSelect
          owners={owners}
          formData={formData}
          setFormData={setFormData}
          setCurrentPage={setCurrentPage}
        />

        <br />

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