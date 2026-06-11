function TicketDetailActions({
  onBack,
  onDelete,
  onSave,
  successMessage
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
        onClick={onSave}
        style={{
          backgroundColor: "#d94f8a",
          color: "white",
          border: "none",
          padding: "8px 16px",
          cursor: "pointer"
        }}
      >
        Save Changes
      </button>

      {successMessage && (

        <div
          style={{
            backgroundColor: "#d9ffd9",
            border: "1px solid green",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "20px",
            color: "#206020",
            fontWeight: "bold"
          }}
        >
          ✓ {successMessage}
        </div>

      )}

    </div>
  );
}

export default TicketDetailActions;