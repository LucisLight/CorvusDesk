function ClosedTicketOwnerCard({
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
        Owner Information
      </h2>

      <p>
        <strong>Owner:</strong>
        {" "}
        {ticket.ownerName || "Unassigned"}
      </p>

      <p>
        <strong>Email:</strong>
        {" "}
        {ticket.ownerEmail || "N/A"}
      </p>

      <p>
        <strong>Phone:</strong>
        {" "}
        {ticket.ownerPhone || "N/A"}
      </p>

    </div>
  );
}

export default ClosedTicketOwnerCard;