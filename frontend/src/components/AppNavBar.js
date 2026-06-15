function AppNavBar({
  currentOwner,
  currentPage,
  setCurrentPage,
  setSelectedTicket,
  setSelectedClosedTicket,
  handleLogout,
  isAdmin
}) {

  const goToPage = (pageName) => {

    setSelectedTicket(null);

    setSelectedClosedTicket(null);

    setCurrentPage(pageName);
  };

  const navButtonStyle = (pageName) => ({
    padding: "10px 18px",
    backgroundColor:
      currentPage === pageName
        ? "#f7d7e6"
        : "white",
    border: "1px solid #d94f8a",
    cursor: "pointer",
    borderRadius: "10px"
  });

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: "16px 30px",
        borderRadius: "14px",
        marginBottom: "30px",
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.05)"
      }}
    >

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px"
        }}
      >

        <img
          src="/small-corvus.png"
          alt="CorvusDesk"
          style={{
            height: "60px"
          }}
        />

        {currentOwner && (

          <div
            style={{
              fontSize: "14px",
              color: "#555"
            }}
          >
            Logged in as{" "}
            <strong>
              {currentOwner.name}
            </strong>
            {" "}
            ({currentOwner.clearanceLevel || "General"})
          </div>

        )}

      </div>

      <div
        style={{
          display: "flex",
          gap: "15px"
        }}
      >

        <button
          onClick={() => goToPage("tickets")}
          style={navButtonStyle("tickets")}
        >
          All Tickets
        </button>

        <button
          onClick={() => goToPage("closedTickets")}
          style={navButtonStyle("closedTickets")}
        >
          Closed Tickets
        </button>

        <button
          onClick={() => goToPage("create")}
          style={navButtonStyle("create")}
        >
          Create Ticket
        </button>

        {isAdmin && (

          <button
            onClick={() => goToPage("owners")}
            style={navButtonStyle("owners")}
          >
            Owners
          </button>

        )}

        <button
          onClick={handleLogout}
          style={{
            padding: "10px 18px",
            backgroundColor: "white",
            border: "1px solid #999",
            cursor: "pointer",
            borderRadius: "10px"
          }}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default AppNavBar;