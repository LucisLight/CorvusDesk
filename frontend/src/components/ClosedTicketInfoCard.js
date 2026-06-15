function ClosedTicketInfoCard({
  ticket
}) {

  return (

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
        Closed Ticket Information
      </h2>

      <p>
        <strong>Request ID:</strong>
        {" "}
        {ticket.ticketId.substring(0, 8)}
      </p>

      <p>
        <strong>Status:</strong>
        {" "}
        {ticket.status}
      </p>

      <p>
        <strong>Priority:</strong>
        {" "}
        {ticket.priority || "N/A"}
      </p>

      <p>
        <strong>Category:</strong>
        {" "}
        {ticket.category || "N/A"}
      </p>

      <p>
        <strong>Created:</strong>
        {" "}
        {new Date(ticket.createdAt).toLocaleString()}
      </p>

      <p>
        <strong>Closed / Last Updated:</strong>
        {" "}
        {ticket.updatedAt
          ? new Date(ticket.updatedAt).toLocaleString()
          : "N/A"}
      </p>

      <hr />

      <h3>Description</h3>

      <p>
        {ticket.description}
      </p>

    </div>
  );
}

export default ClosedTicketInfoCard;