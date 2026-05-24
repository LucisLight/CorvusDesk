function TicketListPage({
  tickets,
  setSelectedTicket
}) {

  return (

    <div style={{
      padding: "30px"
    }}>

      <h1 style={{
        color: "#d94f8a",
        marginBottom: "20px"
      }}>
        All Tickets
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "140px 120px 1fr 160px 160px 160px 120px",
        fontWeight: "bold",
        borderBottom: "2px solid lightpink",
        paddingBottom: "10px",
        marginBottom: "10px"
      }}>

        <div>Created</div>

        <div>Status</div>

        <div>Title</div>

        <div>Requester</div>

        <div>Owner</div>

        <div>Last Updated</div>

        <div>Action</div>

      </div>

      {tickets.map((ticket) => (

        <div
          key={ticket.ticketId}
          style={{
            display: "grid",
            gridTemplateColumns: "140px 120px 1fr 160px 160px 160px 120px",
            alignItems: "center",
            padding: "12px 0",
            borderBottom: "1px solid #eee"
          }}
        >

          <div>
            {new Date(ticket.createdAt).toLocaleDateString()}
          </div>

          <div>

            <span style={{
              backgroundColor:
                ticket.status === "Open"
                  ? "#ffe0ea"
                  : ticket.status === "In Progress"
                  ? "#fff4d6"
                  : "#d9ffd9",

              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "14px"
            }}>
              {ticket.status}
            </span>

          </div>

          <div>
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
                cursor: "pointer"
              }}
            >
              View
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default TicketListPage;