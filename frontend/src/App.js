import { useEffect, useState } from "react";

import CreateTicketPage from "./pages/CreateTicketPage";
import TicketListPage from "./pages/TicketListPage";
import TicketDetailPage from "./pages/TicketDetailPage";
import AddOwnerPage from "./pages/AddOwnerPage";
import ViewOwnersPage from "./pages/ViewOwnersPage";
import LoginPage from "./pages/LoginPage";
import EditOwnerPage from "./pages/EditOwnerPage";

function App() {

  const [tickets, setTickets] = useState([]);

  const [selectedTicket, setSelectedTicket] = useState(null);

  const [selectedOwner, setSelectedOwner] = useState(null);

  const [currentPage, setCurrentPage] =
    useState("tickets");

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  useEffect(() => {

    fetchTickets();

  }, []);

  const fetchTickets = async () => {

    const response = await fetch(
      "http://localhost:8080/tickets"
    );

    const data = await response.json();

    setTickets(data);
  };

  if (!isLoggedIn) {

    return (
      <LoginPage
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  }

  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff5fa",
        padding: "20px"
      }}
    >

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

        </div>

        <div
          style={{
            display: "flex",
            gap: "15px"
          }}
        >

          <button
            onClick={() => {

              setSelectedTicket(null);

              setCurrentPage("tickets");

            }}
            style={{
              padding: "10px 18px",
              backgroundColor:
                currentPage === "tickets"
                  ? "#f7d7e6"
                  : "white",
              border: "1px solid #d94f8a",
              cursor: "pointer",
              borderRadius: "10px"
            }}
          >
            All Tickets
          </button>

          <button
            onClick={() => {

              setSelectedTicket(null);

              setCurrentPage("create");

            }}
            style={{
              padding: "10px 18px",
              backgroundColor:
                currentPage === "create"
                  ? "#f7d7e6"
                  : "white",
              border: "1px solid #d94f8a",
              cursor: "pointer",
              borderRadius: "10px"
            }}
          >
            Create Ticket
          </button>

          <button
            onClick={() => {

              setSelectedTicket(null);

              setCurrentPage("owners");

            }}
            style={{
              padding: "10px 18px",
              backgroundColor:
                currentPage === "owners"
                  ? "#f7d7e6"
                  : "white",
              border: "1px solid #d94f8a",
              cursor: "pointer",
              borderRadius: "10px"
            }}
          >
            Owners
          </button>

        </div>

      </div>

      {selectedTicket ? (

        <TicketDetailPage
          selectedTicket={selectedTicket}
          setSelectedTicket={setSelectedTicket}
          fetchTickets={fetchTickets}
          setCurrentPage={setCurrentPage}
        />

      ) : currentPage === "owners" ? (

        <ViewOwnersPage
          setCurrentPage={setCurrentPage}
          setSelectedOwner={setSelectedOwner}
        />

      ) : currentPage === "editOwner" ? (

        <EditOwnerPage
          selectedOwner={selectedOwner}
          setSelectedOwner={setSelectedOwner}
          setCurrentPage={setCurrentPage}
        />

      ) : currentPage === "addOwner" ? (

        <AddOwnerPage
          setCurrentPage={setCurrentPage}
        />

      ) : currentPage === "create" ? (

        <CreateTicketPage
          fetchTickets={fetchTickets}
          setCurrentPage={setCurrentPage}
        />

      ) : (

        <TicketListPage
          tickets={tickets}
          setSelectedTicket={setSelectedTicket}
          fetchTickets={fetchTickets}
        />

      )}

    </div>
  );
}

export default App;