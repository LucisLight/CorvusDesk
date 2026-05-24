function TicketListPage({
  tickets,
  setSelectedTicket,
  fetchTickets
}) {

  const updateTicket = async (updatedTicket) => {

    await fetch(
      `http://localhost:8080/tickets/${updatedTicket.ticketId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTicket)
      }
    );
  };

  return (

    <div
      style={{
        padding: "30px",
        width: "100%",
        maxWidth: "1800px",
        margin: "0 auto"
      }}
    >

      <div
        style={{
          overflowX: "auto",
          width: "100%"
        }}
      >

        <h1
          style={{
            color: "#d94f8a",
            marginBottom: "20px"
          }}
        >
          All Tickets
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(120px,1.2fr) minmax(140px,1fr) minmax(140px,1fr) minmax(250px,3fr) minmax(140px,1.5fr) minmax(140px,1.5fr) minmax(140px,1.5fr) minmax(100px,1fr)",
            fontWeight: "bold",
            borderBottom: "2px solid lightpink",
            paddingBottom: "10px",
            marginBottom: "10px",
            gap: "12px",
            minWidth: "1200px"
          }}
        >

          <div>Created</div>

          <div>Status</div>

          <div>Priority</div>

          <div>Title</div>

          <div>Requester</div>

          <div>Owner</div>

          <div>Updated</div>

          <div>Action</div>

        </div>

        {tickets.map((ticket) => (

          <div
            key={ticket.ticketId}
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(120px,1.2fr) minmax(140px,1fr) minmax(140px,1fr) minmax(250px,3fr) minmax(140px,1.5fr) minmax(140px,1.5fr) minmax(140px,1.5fr) minmax(100px,1fr)",
              alignItems: "center",
              padding: "12px 0",
              borderBottom: "1px solid #eee",
              gap: "12px",
              minWidth: "1200px"
            }}
          >

            <div>
              {new Date(ticket.createdAt).toLocaleDateString()}
            </div>

            <div>

              <select
                value={ticket.status || "Open"}
                onChange={async (event) => {

                  const updatedTicket = {
                    ...ticket,
                    status: event.target.value
                  };

                  await updateTicket(updatedTicket);

                  fetchTickets();

                }}
                style={{
                  padding: "6px 10px",
                  borderRadius: "10px",
                  border: "1px solid lightpink",
                  backgroundColor:
                    ticket.status === "Open"
                      ? "#ffe0ea"
                      : ticket.status === "In Progress"
                      ? "#fff4d6"
                      : "#d9ffd9",
                  fontWeight: "bold"
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

            </div>

            <div>

              <select
                value={ticket.priority || "Low"}
                onChange={async (event) => {

                  const updatedTicket = {
                    ...ticket,
                    priority: event.target.value
                  };

                  await updateTicket(updatedTicket);

                  fetchTickets();

                }}
                style={{
                  padding: "6px 10px",
                  borderRadius: "999px",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor:
                    ticket.priority === "Critical"
                      ? "#d62828"
                      : ticket.priority === "High"
                      ? "#f77f00"
                      : ticket.priority === "Medium"
                      ? "#3a86ff"
                      : "#6c757d"
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

            </div>

            <div
              style={{
                wordBreak: "break-word"
              }}
            >
              {ticket.title}
            </div>

            <div>
              {ticket.requesterName}
            </div>

            <div>
              {ticket.ownerName || "Unassigned"}
            </div>

            <div>

              {ticket.updatedAt
                ? new Date(ticket.updatedAt).toLocaleDateString()
                : "N/A"}

            </div>

            <div>

              <button
                onClick={() => setSelectedTicket(ticket)}
                style={{
                  backgroundColor: "#f7d7e6",
                  border: "1px solid #d94f8a",
                  padding: "8px 14px",
                  cursor: "pointer",
                  borderRadius: "8px"
                }}
              >
                View
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TicketListPage;