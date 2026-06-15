import { useState } from "react";

import SortableHeader from "../components/SortableHeader";
import TicketFilters from "../components/TicketFilters";

import { FilterTicketsByClearance } from "../utils/FilterTicketsByClearance";
import { FilterTickets } from "../utils/FilterTickets";
import { SortTickets } from "../utils/SortTickets";

function ClosedTicketsPage({
  tickets,
  currentOwner,
  setSelectedClosedTicket
}) {

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

  const closedTickets = clearanceFilteredTickets.filter(
    (ticket) => ticket.status === "Closed"
  );

  const filteredClosedTickets = FilterTickets({
    tickets: closedTickets,
    priorityFilter: priorityFilter,
    searchText: searchText
  });

  const sortedClosedTickets = SortTickets({
    tickets: filteredClosedTickets,
    sortField: sortField,
    sortDirection: sortDirection
  });

  return (

    <div
      style={{
        padding: "30px",
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto"
      }}
    >

      <h1
        style={{
          color: "#d94f8a",
          marginBottom: "20px"
        }}
      >
        Closed Tickets
      </h1>

      <TicketFilters
        statusFilter=""
        setStatusFilter={() => {}}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        searchText={searchText}
        setSearchText={setSearchText}
        showStatusFilter={false}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr 2fr 1fr 1fr",
          fontWeight: "bold",
          borderBottom: "2px solid lightpink",
          paddingBottom: "10px",
          marginBottom: "10px",
          gap: "12px"
        }}
      >

        <SortableHeader
          label="Closed"
          field="updatedAt"
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

        <div>Action</div>

      </div>

      {sortedClosedTickets.length === 0 ? (

        <div
          style={{
            backgroundColor: "white",
            border: "1px solid lightpink",
            borderRadius: "12px",
            padding: "20px",
            color: "#666",
            fontWeight: "bold"
          }}
        >
          No closed tickets found.
        </div>

      ) : (

        sortedClosedTickets.map((ticket) => (

          <div
            key={ticket.ticketId}
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr 2fr 1fr 1fr",
              alignItems: "center",
              backgroundColor: "white",
              border: "1px solid lightpink",
              borderRadius: "12px",
              padding: "14px",
              marginBottom: "12px",
              gap: "12px"
            }}
          >

            <div>
              <strong>Closed:</strong>
              <br />
              {ticket.updatedAt
                ? new Date(ticket.updatedAt).toLocaleDateString()
                : "N/A"}
            </div>

            <div>
              <strong>Priority:</strong>
              <br />
              {ticket.priority || "N/A"}
            </div>

            <div>
              <strong>Title:</strong>
              <br />
              {ticket.title}
            </div>

            <div>
              <strong>Requester:</strong>
              <br />
              {ticket.requesterName || "N/A"}
            </div>

            <button
              onClick={() =>
                setSelectedClosedTicket(ticket)
              }
              style={{
                backgroundColor: "#f7d7e6",
                border: "1px solid #d94f8a",
                padding: "8px 14px",
                cursor: "pointer",
                borderRadius: "8px"
              }}
            >
              View
            </button>

          </div>

        ))

      )}

    </div>
  );
}

export default ClosedTicketsPage;