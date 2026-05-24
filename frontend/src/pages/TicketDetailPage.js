function TicketDetailPage({
  selectedTicket,
  setSelectedTicket,
  fetchTickets,
  setCurrentPage
}) {

  const deleteTicket = async (ticketId) => {

    await fetch(`http://localhost:8080/tickets/${ticketId}`, {
      method: "DELETE"
    });

    fetchTickets();

    setSelectedTicket(null);
  };

  return (

    <div style={{
      padding: "30px",
      backgroundColor: "#fff5fa",
      minHeight: "100vh"
    }}>

      <div style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px"
      }}>

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

      </div>

      <h1 style={{
        color: "#d94f8a",
        marginBottom: "25px"
      }}>
        {selectedTicket.title}
      </h1>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>

        {/* Ticket Information */}

        <div style={{
          backgroundColor: "white",
          border: "1px solid lightpink",
          borderRadius: "12px",
          padding: "20px"
        }}>

          <h2 style={{
            marginTop: 0,
            color: "#d94f8a"
          }}>
            Ticket Information
          </h2>

          <p>
            <strong>Request ID:</strong>
            {" "}
            {selectedTicket.ticketId.substring(0, 8)}
          </p>

          <p>
            <strong>Status:</strong>
            {" "}
            {selectedTicket.status}
          </p>

          <p>
            <strong>Priority:</strong>
            {" "}
            {selectedTicket.priority || "N/A"}
          </p>

          <p>
            <strong>Category:</strong>
            {" "}
            {selectedTicket.category || "N/A"}
          </p>

          <p>
            <strong>Created:</strong>
            {" "}
            {new Date(selectedTicket.createdAt).toLocaleString()}
          </p>

          <p>
            <strong>Last Updated:</strong>
            {" "}
            {selectedTicket.updatedAt
              ? new Date(selectedTicket.updatedAt).toLocaleString()
              : "N/A"}
          </p>

          <hr />

          <h3>Description</h3>

          <p>
            {selectedTicket.description}
          </p>

        </div>

        {/* Requester Information */}

        <div style={{
          backgroundColor: "white",
          border: "1px solid lightpink",
          borderRadius: "12px",
          padding: "20px"
        }}>

          <h2 style={{
            marginTop: 0,
            color: "#d94f8a"
          }}>
            Requester Information
          </h2>

          <p>
            <strong>Name:</strong>
            {" "}
            {selectedTicket.requesterName || "N/A"}
          </p>

          <p>
            <strong>Email:</strong>
            {" "}
            {selectedTicket.requesterEmail || "N/A"}
          </p>

          <p>
            <strong>Phone:</strong>
            {" "}
            {selectedTicket.requesterPhone || "N/A"}
          </p>

        </div>

        {/* Owner Information */}

        <div style={{
          backgroundColor: "white",
          border: "1px solid lightpink",
          borderRadius: "12px",
          padding: "20px"
        }}>

          <h2 style={{
            marginTop: 0,
            color: "#d94f8a"
          }}>
            Owner Information
          </h2>

          <p>
            <strong>Name:</strong>
            {" "}
            {selectedTicket.ownerName || "Unassigned"}
          </p>

          <p>
            <strong>Email:</strong>
            {" "}
            {selectedTicket.ownerEmail || "N/A"}
          </p>

          <p>
            <strong>Phone:</strong>
            {" "}
            {selectedTicket.ownerPhone || "N/A"}
          </p>

        </div>

      </div>

    </div>
  );
}

export default TicketDetailPage;