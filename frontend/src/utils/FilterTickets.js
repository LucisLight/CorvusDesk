export const FilterTickets = ({
  tickets,
  statusFilter = "",
  priorityFilter = "",
  searchText = ""
}) => {

  return tickets.filter((ticket) => {

    const searchValue =
      searchText.toLowerCase();

    const matchesStatus =
      !statusFilter ||
      ticket.status === statusFilter;

    const matchesPriority =
      !priorityFilter ||
      ticket.priority === priorityFilter;

    const matchesSearch =
      !searchText ||

      ticket.title
        ?.toLowerCase()
        .includes(searchValue) ||

      ticket.description
        ?.toLowerCase()
        .includes(searchValue) ||

      ticket.requesterName
        ?.toLowerCase()
        .includes(searchValue) ||

      ticket.ownerName
        ?.toLowerCase()
        .includes(searchValue) ||

      ticket.category
        ?.toLowerCase()
        .includes(searchValue) ||

      ticket.ticketId
        ?.toLowerCase()
        .includes(searchValue);

    return (
      matchesStatus &&
      matchesPriority &&
      matchesSearch
    );
  });
};