function OwnerInformationCard({
  editedTicket,
  setEditedTicket,
  owners
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
        <strong>Assigned Owner:</strong>
        {" "}

        <select
          value={editedTicket.ownerId || ""}
          onChange={(event) => {

            const selectedOwner = owners.find(
              (owner) =>
                owner.ownerId === event.target.value
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

          <option value="">
            Unassigned
          </option>

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
  );
}

export default OwnerInformationCard;