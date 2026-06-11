import { useEffect, useState } from "react";

import TicketUpdatesPanel from "./TicketUpdatesPanel";

import TicketDetailActions from "../components/TicketDetailActions";
import TicketInformationCard from "../components/TicketInformationCard";
import RequesterInformationCard from "../components/RequesterInformationCard";
import OwnerInformationCard from "../components/OwnerInformationCard";

import { updateTicketWithHistory } from "../api/TicketsAPI";

function TicketDetailPage({
  selectedTicket,
  setSelectedTicket,
  fetchTickets,
  setCurrentPage,
  currentOwner
}) {

  const [successMessage, setSuccessMessage] =
    useState("");

  const [owners, setOwners] =
    useState([]);

  const [updatesRefreshKey, setUpdatesRefreshKey] =
    useState(0);

  const [editedTicket, setEditedTicket] =
    useState({
      ...selectedTicket
    });

  useEffect(() => {

    fetchOwners();

  }, []);

  const fetchOwners = async () => {

    const response = await fetch(
      "http://localhost:8080/owners"
    );

    const data = await response.json();

    setOwners(data);
  };

  const handleBack = () => {

    setSelectedTicket(null);

    setCurrentPage("tickets");
  };

  const deleteTicket = async () => {

    if (
      selectedTicket.status !== "Closed" &&
      selectedTicket.status !== "Resolved"
    ) {

      const confirmDelete = window.confirm(
        "This ticket is not closed or resolved. Are you sure you want to delete it?"
      );

      if (!confirmDelete) {

        return;
      }
    }

    await fetch(
      `http://localhost:8080/tickets/${selectedTicket.ticketId}`,
      {
        method: "DELETE"
      }
    );

    fetchTickets();

    setSelectedTicket(null);
  };

  const saveChanges = async () => {

    setSuccessMessage("");

    await updateTicketWithHistory(
      editedTicket,
      selectedTicket,
      currentOwner
    );

    fetchTickets();

    setSelectedTicket(editedTicket);

    setUpdatesRefreshKey(
      updatesRefreshKey + 1
    );

    setSuccessMessage(
      "Changes saved successfully!"
    );
  };

  return (

    <div
      style={{
        padding: "30px",
        backgroundColor: "#fff5fa",
        minHeight: "100vh"
      }}
    >

      <TicketDetailActions
        onBack={handleBack}
        onDelete={deleteTicket}
        onSave={saveChanges}
        successMessage={successMessage}
      />

      <h1
        style={{
          color: "#d94f8a",
          marginBottom: "25px"
        }}
      >
        {editedTicket.title}
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >

        <TicketInformationCard
          editedTicket={editedTicket}
          setEditedTicket={setEditedTicket}
        />

        <RequesterInformationCard
          editedTicket={editedTicket}
        />

        <OwnerInformationCard
          editedTicket={editedTicket}
          setEditedTicket={setEditedTicket}
          owners={owners}
        />

        <TicketUpdatesPanel
          ticketId={selectedTicket.ticketId}
          currentOwner={currentOwner}
          refreshKey={updatesRefreshKey}
        />

      </div>

    </div>
  );
}

export default TicketDetailPage;