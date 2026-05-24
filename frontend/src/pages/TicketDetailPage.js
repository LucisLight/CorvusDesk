import { useEffect, useState } from "react";

function TicketDetailPage({
  selectedTicket,
  setSelectedTicket,
  fetchTickets,
  setCurrentPage
}) {
  const [successMessage, setSuccessMessage] = useState("");

  const [owners, setOwners] = useState([]);

  const [editedTicket, setEditedTicket] = useState({
    ...selectedTicket
  });

  useEffect(() => {

    fetchOwners();

  }, []);

  const fetchOwners = async () => {

    const response = await fetch("http://localhost:8080/owners");

    const data = await response.json();

    setOwners(data);
  };

  const deleteTicket = async (ticketId) => {

    if (
      selectedTicket.status !== "Closed" &&
      selectedTicket.status !== "Resolved"
    ) {
      const confirmDelete = window.confirm(
        "This ticket is not closed or resolved. Are you sure you want to delete it?"
      );

      if (!confirmDelete) {
        return;
      }
    }

    await fetch(`http://localhost:8080/tickets/${ticketId}`, {
      method: "DELETE"
    });

    fetchTickets();

    setSelectedTicket(null);
  };

  const saveChanges = async () => {
    setSuccessMessage("");

    await fetch(
      `http://localhost:8080/tickets/${selectedTicket.ticketId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedTicket)
      }
    );

    fetchTickets();

    setSelectedTicket(editedTicket);

    setSuccessMessage("Changes saved successfully!");
  };

  return (

    <div
      style={{
        padding: "30px",
        backgroundColor: "#fff5fa",
        minHeight: "100vh"
      }}
    >

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px"
        }}
      >

        <button
          onClick={() => {

            setSelectedTicket(null);

            setCurrentPage("tickets");

          }}
          style={{
            padding: "8px 16px",
            cursor: "pointer"
          }}
        >
          Back
        </button>

        <button
          onClick={() => deleteTicket(selectedTicket.ticketId)}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "8px 16px",
            cursor: "pointer"
          }}
        >
          Delete
        </button>

        <button
          onClick={saveChanges}
          style={{
            backgroundColor: "#d94f8a",
            color: "white",
            border: "none",
            padding: "8px 16px",
            cursor: "pointer"
          }}
        >
          Save Changes
        </button>

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
            ✓  {successMessage}
          </div>

        )}

      </div>

      <h1
        style={{
          color: "#d94f8a",
          marginBottom: "25px"
        }}
      >
        {editedTicket.title}
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >

        {/* Ticket Information */}

        <div
          style={{
            backgroundColor: "white",
            border: "1px solid lightpink",
            borderRadius: "12px",
            padding: "20px"
          }}
        >

          <h2
            style={{
              marginTop: 0,
              color: "#d94f8a"
            }}
          >
            Ticket Information
          </h2>

          <p>
            <strong>Request ID:</strong>
            {" "}
            {editedTicket.ticketId.substring(0, 8)}
          </p>

          <p>
            <strong>Status:</strong>
            {" "}

            <select
              value={editedTicket.status || ""}
              onChange={(event) => {

                setEditedTicket({
                  ...editedTicket,
                  status: event.target.value
                });

              }}
            >

              <option value="Open">
                Open
              </option>

              <option value="In Progress">
                In Progress
              </option>
              
              <option value="Resolved">
                Resolved
              </option>

              <option value="Closed">
                Closed
              </option>

            </select>

          </p>

          <p>
            <strong>Priority:</strong>
            {" "}

            <select
              value={editedTicket.priority || ""}
              onChange={(event) => {

                setEditedTicket({
                  ...editedTicket,
                  priority: event.target.value
                });

              }}
            >

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

          </p>

          <p>
            <strong>Category:</strong>
            {" "}
            {editedTicket.category || "N/A"}
          </p>

          <p>
            <strong>Created:</strong>
            {" "}
            {new Date(editedTicket.createdAt).toLocaleString()}
          </p>

          <p>
            <strong>Last Updated:</strong>
            {" "}

            {editedTicket.updatedAt
              ? new Date(editedTicket.updatedAt).toLocaleString()
              : "N/A"}

          </p>

          <hr />

          <h3>Description</h3>

          <p>
            {editedTicket.description}
          </p>

        </div>

        {/* Requester Information */}

        <div
          style={{
            backgroundColor: "white",
            border: "1px solid lightpink",
            borderRadius: "12px",
            padding: "20px"
          }}
        >

          <h2
            style={{
              marginTop: 0,
              color: "#d94f8a"
            }}
          >
            Requester Information
          </h2>

          <p>
            <strong>Name:</strong>
            {" "}
            {editedTicket.requesterName || "N/A"}
          </p>

          <p>
            <strong>Email:</strong>
            {" "}
            {editedTicket.requesterEmail || "N/A"}
          </p>

          <p>
            <strong>Phone:</strong>
            {" "}
            {editedTicket.requesterPhone || "N/A"}
          </p>

        </div>

        {/* Owner Information */}

        <div
          style={{
            backgroundColor: "white",
            border: "1px solid lightpink",
            borderRadius: "12px",
            padding: "20px"
          }}
        >

          <h2
            style={{
              marginTop: 0,
              color: "#d94f8a"
            }}
          >
            Owner Information
          </h2>

          <p>
            <strong>Assigned Owner:</strong>
            {" "}

            <select
              value={editedTicket.ownerId || ""}
              onChange={(event) => {

                const selectedOwner = owners.find(
                  (owner) => owner.ownerId === event.target.value
                );

                if (!selectedOwner) {

                  return;
                }

                setEditedTicket({
                  ...editedTicket,
                  ownerId: selectedOwner.ownerId,
                  ownerName: selectedOwner.name,
                  ownerEmail: selectedOwner.email,
                  ownerPhone: selectedOwner.phone
                });

              }}
            >

              {owners.map((owner) => (

                <option
                  key={owner.ownerId}
                  value={owner.ownerId}
                >
                  {owner.name}
                </option>

              ))}

            </select>

          </p>

          <p>
            <strong>Email:</strong>
            {" "}
            {editedTicket.ownerEmail || "N/A"}
          </p>

          <p>
            <strong>Phone:</strong>
            {" "}
            {editedTicket.ownerPhone || "N/A"}
          </p>

        </div>

      </div>

    </div>
  );
}

export default TicketDetailPage;