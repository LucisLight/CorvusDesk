import { useEffect, useState } from "react";

function TicketUpdatesPanel({
  ticketId,
  currentOwner,
  refreshKey
}) {

  const [updates, setUpdates] = useState([]);

  const [commentText, setCommentText] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  useEffect(() => {

    fetchUpdates();

  }, [ticketId, refreshKey]);

  const fetchUpdates = async () => {

    const response = await fetch(
      `http://localhost:8080/ticket-updates/ticket/${ticketId}`
    );

    const data = await response.json();

    setUpdates(data);
  };

  const addComment = async (event) => {

    event.preventDefault();

    setErrorMessage("");

    if (!commentText.trim()) {

      setErrorMessage(
        "Comment cannot be empty."
      );

      return;
    }

    await fetch(
      "http://localhost:8080/ticket-updates/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ticketId: ticketId,
          updateType: "COMMENT",
          message: commentText,
          createdByOwnerId: currentOwner?.ownerId,
          createdByOwnerName: currentOwner?.name
        })
      }
    );

    setCommentText("");

    fetchUpdates();
  };

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
        Comments and Request History
      </h2>

      <form onSubmit={addComment}>

        <textarea
          placeholder="Add a comment or note..."
          value={commentText}
          onChange={(event) =>
            setCommentText(event.target.value)
          }
          style={{
            width: "100%",
            minHeight: "90px",
            padding: "10px",
            border: "1px solid lightpink",
            borderRadius: "10px",
            resize: "vertical"
          }}
        />

        {errorMessage && (

          <p
            style={{
              color: "red",
              fontWeight: "bold"
            }}
          >
            {errorMessage}
          </p>

        )}

        <button
          type="submit"
          style={{
            marginTop: "10px",
            backgroundColor: "#d94f8a",
            color: "white",
            border: "none",
            padding: "10px 18px",
            cursor: "pointer",
            borderRadius: "10px"
          }}
        >
          Add Comment
        </button>

      </form>

      <hr
        style={{
          margin: "25px 0"
        }}
      />

      {updates.length === 0 ? (

        <p
          style={{
            color: "#666",
            fontStyle: "italic"
          }}
        >
          No comments or history yet.
        </p>

      ) : (

        updates.map((update) => (

          <div
            key={update.ticketUpdateId}
            style={{
              border: "1px solid #f3c2d8",
              backgroundColor: "#fff7fb",
              borderRadius: "10px",
              padding: "12px",
              marginBottom: "12px"
            }}
          >

            <p
              style={{
                margin: 0,
                fontWeight: "bold",
                color: "#d94f8a"
              }}
            >
              {update.updateType}
            </p>

            <p
              style={{
                marginBottom: "6px"
              }}
            >
              {update.message}
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#666"
              }}
            >
              By {update.createdByOwnerName || "Unknown Owner"}
              {" "}
              on
              {" "}
              {update.createdAt
                ? new Date(update.createdAt).toLocaleString()
                : "N/A"}
            </p>

          </div>

        ))

      )}

    </div>
  );
}

export default TicketUpdatesPanel;