export const createTicketUpdate = async ({
  ticketId,
  updateType,
  message,
  currentOwner
}) => {

  await fetch(
    "http://localhost:8080/ticket-updates/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ticketId: ticketId,
        updateType: updateType,
        message: message,
        createdByOwnerId: currentOwner?.ownerId,
        createdByOwnerName: currentOwner?.name
      })
    }
  );
};