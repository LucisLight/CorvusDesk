function TicketInformationCard({
  editedTicket,
  setEditedTicket
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
  );
}

export default TicketInformationCard;