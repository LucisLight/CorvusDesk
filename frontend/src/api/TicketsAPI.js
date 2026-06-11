import { createTicketUpdate } from "./TicketUpdatesAPI";

export const updateTicket = async (updatedTicket) => {

  await fetch(
    `http://localhost:8080/tickets/${updatedTicket.ticketId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedTicket)
    }
  );
};

export const updateTicketWithHistory = async (
  updatedTicket,
  originalTicket,
  currentOwner
) => {

  await updateTicket(updatedTicket);

  if (originalTicket.status !== updatedTicket.status) {

    await createTicketUpdate({
      ticketId: updatedTicket.ticketId,
      updateType: "STATUS_CHANGE",
      message:
        `Status changed from ${originalTicket.status} to ${updatedTicket.status}.`,
      currentOwner: currentOwner
    });
  }

  if (originalTicket.priority !== updatedTicket.priority) {

    await createTicketUpdate({
      ticketId: updatedTicket.ticketId,
      updateType: "PRIORITY_CHANGE",
      message:
        `Priority changed from ${originalTicket.priority} to ${updatedTicket.priority}.`,
      currentOwner: currentOwner
    });
  }

  if (originalTicket.ownerId !== updatedTicket.ownerId) {

    await createTicketUpdate({
      ticketId: updatedTicket.ticketId,
      updateType: "OWNER_CHANGE",
      message:
        `Owner changed from ${originalTicket.ownerName || "Unassigned"} to ${updatedTicket.ownerName || "Unassigned"}.`,
      currentOwner: currentOwner
    });
  }
};