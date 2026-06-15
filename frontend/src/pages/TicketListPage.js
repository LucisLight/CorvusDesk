import { useState } from "react";

import SortableHeader from "../components/SortableHeader";
import TicketFilters from "../components/TicketFilters";
import TicketRow from "../components/TicketRow";

import { FilterTicketsByClearance } from "../utils/FilterTicketsByClearance";
import { FilterTickets } from "../utils/FilterTickets";
import { SortTickets } from "../utils/SortTickets";

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

  const [sortField, setSortField] =
    useState("");

  const [sortDirection, setSortDirection] =
    useState("");

  const handleSort = (field) => {

    if (sortField !== field) {

      setSortField(field);

      setSortDirection("default");

      return;
    }

    if (sortDirection === "default") {

      setSortDirection("reverse");

      return;
    }

    setSortField("");

    setSortDirection("");
  };

  const clearanceFilteredTickets = FilterTicketsByClearance({
    tickets: tickets,
    currentOwner: currentOwner
  });

  const filteredTickets = FilterTickets({
    tickets: clearanceFilteredTickets,
    statusFilter: statusFilter,
    priorityFilter: priorityFilter,
    searchText: searchText
  });

  const sortedTickets = SortTickets({
    tickets: filteredTickets,
    sortField: sortField,
    sortDirection: sortDirection
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

          <SortableHeader
            label="Created"
            field="createdAt"
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />

          <SortableHeader
            label="Status"
            field="status"
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />

          <SortableHeader
            label="Priority"
            field="priority"
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />

          <SortableHeader
            label="Title / Details"
            field="titleDetails"
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />

          <SortableHeader
            label="Requester"
            field="requesterName"
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />

          <SortableHeader
            label="Owner"
            field="ownerName"
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />

          <SortableHeader
            label="Updated"
            field="updatedAt"
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />

          <div>Action</div>

        </div>

        {sortedTickets.length === 0 && (

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

        {sortedTickets.map((ticket) => (

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