export const FilterTicketsByClearance = ({
  tickets,
  currentOwner
}) => {

  if (!currentOwner) {

    return [];
  }

  if (currentOwner.clearanceLevel === "Admin") {

    return tickets;
  }

  if (currentOwner.clearanceLevel === "Manager") {

    return tickets;
  }

  if (currentOwner.clearanceLevel === "Network") {

    return tickets.filter(
      (ticket) => ticket.category === "Network"
    );
  }

  if (currentOwner.clearanceLevel === "Phone") {

    return tickets.filter(
      (ticket) => ticket.category === "Phone"
    );
  }

  if (currentOwner.clearanceLevel === "General") {

    return tickets.filter(
      (ticket) =>
        ticket.category === "Email" ||
        ticket.category === "Personal Computing"
    );
  }

  return [];
};