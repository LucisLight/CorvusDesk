function RequesterInformationCard({
  editedTicket
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
  );
}

export default RequesterInformationCard;