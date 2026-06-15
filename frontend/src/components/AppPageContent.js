import ClosedTicketsPage from "../pages/ClosedTicketsPage";
import ClosedTicketDetailPage from "../pages/ClosedTicketDetailPage";
import CreateTicketPage from "../pages/CreateTicketPage";
import TicketListPage from "../pages/TicketListPage";
import TicketDetailPage from "../pages/TicketDetailPage";
import AddOwnerPage from "../pages/AddOwnerPage";
import ViewOwnersPage from "../pages/ViewOwnersPage";
import EditOwnerPage from "../pages/EditOwnerPage";

function AppPageContent({
  tickets,
  selectedTicket,
  setSelectedTicket,
  selectedClosedTicket,
  setSelectedClosedTicket,
  selectedOwner,
  setSelectedOwner,
  currentOwner,
  currentPage,
  setCurrentPage,
  fetchTickets,
  isAdmin
}) {

  if (selectedClosedTicket) {

    return (
      <ClosedTicketDetailPage
        selectedClosedTicket={selectedClosedTicket}
        setSelectedClosedTicket={setSelectedClosedTicket}
        fetchTickets={fetchTickets}
        setCurrentPage={setCurrentPage}
        currentOwner={currentOwner}
      />
    );
  }

  if (selectedTicket) {

    return (
      <TicketDetailPage
        selectedTicket={selectedTicket}
        setSelectedTicket={setSelectedTicket}
        fetchTickets={fetchTickets}
        setCurrentPage={setCurrentPage}
        currentOwner={currentOwner}
      />
    );
  }

  if (currentPage === "closedTickets") {

    return (
      <ClosedTicketsPage
        tickets={tickets}
        setSelectedClosedTicket={setSelectedClosedTicket}
        currentOwner={currentOwner}
      />
    );
  }

  if (currentPage === "owners" && isAdmin) {

    return (
      <ViewOwnersPage
        setCurrentPage={setCurrentPage}
        setSelectedOwner={setSelectedOwner}
      />
    );
  }

  if (currentPage === "editOwner" && isAdmin) {

    return (
      <EditOwnerPage
        selectedOwner={selectedOwner}
        setSelectedOwner={setSelectedOwner}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  if (currentPage === "addOwner" && isAdmin) {

    return (
      <AddOwnerPage
        setCurrentPage={setCurrentPage}
      />
    );
  }

  if (currentPage === "create") {

    return (
      <CreateTicketPage
        fetchTickets={fetchTickets}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return (
    <TicketListPage
      tickets={tickets.filter(
        (ticket) => ticket.status !== "Closed"
      )}
      setSelectedTicket={setSelectedTicket}
      fetchTickets={fetchTickets}
      currentOwner={currentOwner}
    />
  );
}

export default AppPageContent;