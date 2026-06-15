function ClosedTicketActions({
  onBack,
  onDelete,
  onReopen
}) {

  return (

    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px"
      }}
    >

      <button
        onClick={onBack}
        style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}
      >
        Back
      </button>

      <button
        onClick={onDelete}
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
        onClick={onReopen}
        style={{
          backgroundColor: "#d94f8a",
          color: "white",
          border: "none",
          padding: "8px 16px",
          cursor: "pointer"
        }}
      >
        Reopen Ticket
      </button>

    </div>
  );
}

export default ClosedTicketActions;