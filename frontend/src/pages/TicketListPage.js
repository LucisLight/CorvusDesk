import { useState } from "react";

import TicketFilters from "../components/TicketFilters";
import TicketRow from "../components/TicketRow";

function TicketListPage({
  tickets,
  setSelectedTicket,
  fetchTickets,
  currentOwner
}) {

  const [statusFilter, setStatusFilter] =
    useState("");

  const [priorityFilter, setPriorityFilter] =
    useState("");

  const [searchText, setSearchText] =
    useState("");

  const filteredTickets = tickets.filter((ticket) => {

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
        .includes(
          searchText.toLowerCase()
        ) ||

      ticket.description
        ?.toLowerCase()
        .includes(
          searchText.toLowerCase()
        ) ||

      ticket.requesterName
        ?.toLowerCase()
        .includes(
          searchText.toLowerCase()
        );

    return (
      matchesStatus &&
      matchesPriority &&
      matchesSearch
    );
  });

  return (

    <div
      style={{
        padding: "30px",
        width: "100%",
        maxWidth: "1800px",
        margin: "0 auto"
      }}
    >

      <div
        style={{
          overflowX: "auto",
          width: "100%"
        }}
      >

        <h1
          style={{
            color: "#d94f8a",
            marginBottom: "20px"
          }}
        >
          All Tickets
        </h1>

        <TicketFilters
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          searchText={searchText}
          setSearchText={setSearchText}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(120px,1.2fr) minmax(140px,1fr) minmax(140px,1fr) minmax(250px,3fr) minmax(140px,1.5fr) minmax(140px,1.5fr) minmax(140px,1.5fr) minmax(100px,1fr)",
            fontWeight: "bold",
            borderBottom: "2px solid lightpink",
            paddingBottom: "10px",
            marginBottom: "10px",
            gap: "12px",
            minWidth: "1200px"
          }}
        >

          <div>Created</div>

          <div>Status</div>

          <div>Priority</div>

          <div>Title</div>

          <div>Requester</div>

          <div>Owner</div>

          <div>Updated</div>

          <div>Action</div>

        </div>

        {filteredTickets.length === 0 && (

          <div
            style={{
              padding: "20px",
              textAlign: "center",
              color: "#666",
              fontWeight: "bold"
            }}
          >
            No tickets found.
          </div>

        )}

        {filteredTickets.map((ticket) => (

          <TicketRow
            key={ticket.ticketId}
            ticket={ticket}
            setSelectedTicket={setSelectedTicket}
            fetchTickets={fetchTickets}
            currentOwner={currentOwner}
          />

        ))}

      </div>

    </div>
  );
}

export default TicketListPage;