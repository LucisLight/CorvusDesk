import { updateTicketWithHistory } from "../api/TicketsAPI";

import TicketUpdatesPanel from "./TicketUpdatesPanel";
import ClosedTicketActions from "../components/ClosedTicketActions";
import ClosedTicketInfoCard from "../components/ClosedTicketInfoCard";
import ClosedTicketOwnerCard from "../components/ClosedTicketOwnerCard";
import RequesterInformationCard from "../components/RequesterInformationCard";

function ClosedTicketDetailPage({
  selectedClosedTicket,
  setSelectedClosedTicket,
  fetchTickets,
  setCurrentPage,
  currentOwner
}) {

  const handleBack = () => {

    setSelectedClosedTicket(null);

    setCurrentPage("closedTickets");
  };

  const deleteTicket = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to permanently delete this closed ticket?"
    );

    if (!confirmDelete) {

      return;
    }

    await fetch(
      `http://localhost:8080/tickets/${selectedClosedTicket.ticketId}`,
      {
        method: "DELETE"
      }
    );

    fetchTickets();

    setSelectedClosedTicket(null);

    setCurrentPage("closedTickets");
  };

  const reopenTicket = async () => {

    const reopenedTicket = {
      ...selectedClosedTicket,
      status: "Open"
    };

    await updateTicketWithHistory(
      reopenedTicket,
      selectedClosedTicket,
      currentOwner
    );

    fetchTickets();

    setSelectedClosedTicket(null);

    setCurrentPage("tickets");
  };

  return (

    <div
      style={{
        padding: "30px",
        backgroundColor: "#fff5fa",
        minHeight: "100vh"
      }}
    >

      <ClosedTicketActions
        onBack={handleBack}
        onDelete={deleteTicket}
        onReopen={reopenTicket}
      />

      <h1
        style={{
          color: "#d94f8a",
          marginBottom: "25px"
        }}
      >
        {selectedClosedTicket.title}
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >

        <ClosedTicketInfoCard
          ticket={selectedClosedTicket}
        />

        <RequesterInformationCard
          editedTicket={selectedClosedTicket}
        />

        <ClosedTicketOwnerCard
          ticket={selectedClosedTicket}
        />

        <TicketUpdatesPanel
          ticketId={selectedClosedTicket.ticketId}
          currentOwner={currentOwner}
          refreshKey={selectedClosedTicket.updatedAt}
          allowComments={false}
        />

      </div>

    </div>
  );
}

export default ClosedTicketDetailPage;