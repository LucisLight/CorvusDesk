export const SortTickets = ({
  tickets,
  sortField,
  sortDirection
}) => {

  if (!sortField || !sortDirection) {

    return tickets;
  }

  const priorityOrder = {
    Critical: 4,
    High: 3,
    Medium: 2,
    Low: 1
  };

  const statusOrder = {
    Open: 1,
    "In Progress": 2,
    Resolved: 3,
    Closed: 4
  };

  const getValue = (ticket) => {

    if (sortField === "titleDetails") {

      return `${ticket.title || ""} ${ticket.description || ""}`;
    }

    return ticket[sortField];
  };

  const sortedTickets = [...tickets].sort((a, b) => {

    if (sortField === "priority") {

      return (
        (priorityOrder[b.priority] || 0) -
        (priorityOrder[a.priority] || 0)
      );
    }

    if (sortField === "status") {

      return (
        (statusOrder[a.status] || 0) -
        (statusOrder[b.status] || 0)
      );
    }

    if (
      sortField === "createdAt" ||
      sortField === "updatedAt"
    ) {

      return (
        new Date(b[sortField] || 0) -
        new Date(a[sortField] || 0)
      );
    }

    const valueA =
      getValue(a)
        ?.toString()
        .toLowerCase() || "";

    const valueB =
      getValue(b)
        ?.toString()
        .toLowerCase() || "";

    return valueA.localeCompare(valueB);
  });

  if (sortDirection === "reverse") {

    return sortedTickets.reverse();
  }

  return sortedTickets;
};