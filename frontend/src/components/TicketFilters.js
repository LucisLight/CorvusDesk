function TicketFilters({
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  searchText,
  setSearchText
}) {

  return (

    <div
      style={{
        display: "flex",
        gap: "12px",
        marginBottom: "20px",
        flexWrap: "wrap"
      }}
    >

      <select
        value={statusFilter}
        onChange={(event) =>
          setStatusFilter(event.target.value)
        }
        style={{
          padding: "8px"
        }}
      >
        <option value="">
          All Statuses
        </option>

        <option value="Open">
          Open
        </option>

        <option value="In Progress">
          In Progress
        </option>

        <option value="Resolved">
          Resolved
        </option>

        <option value="Closed">
          Closed
        </option>

      </select>

      <select
        value={priorityFilter}
        onChange={(event) =>
          setPriorityFilter(event.target.value)
        }
        style={{
          padding: "8px"
        }}
      >
        <option value="">
          All Priorities
        </option>

        <option value="Low">
          Low
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="High">
          High
        </option>

        <option value="Critical">
          Critical
        </option>

      </select>

      <input
        type="text"
        placeholder="Search title, description, or requester"
        value={searchText}
        onChange={(event) =>
          setSearchText(event.target.value)
        }
        style={{
          padding: "8px",
          width: "300px"
        }}
      />

    </div>
  );
}

export default TicketFilters;