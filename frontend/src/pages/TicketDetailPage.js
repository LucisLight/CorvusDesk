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

  // success message for when the ticket saves correctly
  const [successMessage, setSuccessMessage] =
    useState("");

  // stores all owners so the assigned owner dropdown can use them
  const [owners, setOwners] =
    useState([]);

  // used to force the comments/history panel to refresh after saving changes
  const [updatesRefreshKey, setUpdatesRefreshKey] =
    useState(0);

  // editable copy of the selected ticket so changes do not instantly overwrite the original
  const [editedTicket, setEditedTicket] =
    useState({
      ...selectedTicket
    });

  // when the page loads, grab the owners for the owner dropdown
  useEffect(() => {

    fetchOwners();

  }, []);

  // pulls owner records from the backend
  const fetchOwners = async () => {

    const response = await fetch(
      "http://localhost:8080/owners"
    );

    const data = await response.json();

    setOwners(data);
  };

  // sends the user back to the all tickets page
  const handleBack = () => {

    setSelectedTicket(null);

    setCurrentPage("tickets");
  };

  // deletes the current ticket, but warns first if it is still active
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

  // saves edited ticket data and records history if status, priority, or owner changed
  const saveChanges = async () => {

    setSuccessMessage("");

    await updateTicketWithHistory(
      editedTicket,
      selectedTicket,
      currentOwner
    );

    fetchTickets();

    setSelectedTicket(editedTicket);

    // bumps the refresh key so TicketUpdatesPanel reloads the newest history logs
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

      {/* action buttons were pulled into their own component */}

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

        {/* ticket status, priority, dates, and description live here now */}

        <TicketInformationCard
          editedTicket={editedTicket}
          setEditedTicket={setEditedTicket}
        />

        {/* requester name, email, and phone were moved into this card */}

        <RequesterInformationCard
          editedTicket={editedTicket}
        />

        {/* owner assignment dropdown and owner contact info live here */}

        <OwnerInformationCard
          editedTicket={editedTicket}
          setEditedTicket={setEditedTicket}
          owners={owners}
        />

        {/* comments and history stay separated from the main ticket display */}

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