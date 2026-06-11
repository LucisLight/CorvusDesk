import { updateTicketWithHistory } from "../api/TicketsAPI";

function TicketRow({
  ticket,
  setSelectedTicket,
  fetchTickets,
  currentOwner
}) {

  const handleStatusChange = async (event) => {

    const updatedTicket = {
      ...ticket,
      status: event.target.value
    };

    await updateTicketWithHistory(
      updatedTicket,
      ticket,
      currentOwner
    );

    fetchTickets();
  };

  const handlePriorityChange = async (event) => {

    const updatedTicket = {
      ...ticket,
      priority: event.target.value
    };

    await updateTicketWithHistory(
      updatedTicket,
      ticket,
      currentOwner
    );

    fetchTickets();
  };

  return (

    <div
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
          onChange={handleStatusChange}
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
          onChange={handlePriorityChange}
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
  );
}

export default TicketRow;