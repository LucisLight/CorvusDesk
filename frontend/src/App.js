import { useEffect, useState } from "react";

import AppNavBar from "./components/AppNavBar";
import AppPageContent from "./components/AppPageContent";
import LoginPage from "./pages/LoginPage";

function App() {

  const [tickets, setTickets] =
    useState([]);

  const [selectedTicket, setSelectedTicket] =
    useState(null);

  const [selectedClosedTicket, setSelectedClosedTicket] =
    useState(null);

  const [selectedOwner, setSelectedOwner] =
    useState(null);

  const [currentOwner, setCurrentOwner] =
    useState(null);

  const [currentPage, setCurrentPage] =
    useState("tickets");

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const isAdmin =
    currentOwner?.clearanceLevel === "Admin";

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

  const handleLogout = () => {

    setCurrentOwner(null);

    setIsLoggedIn(false);

    setSelectedTicket(null);

    setSelectedClosedTicket(null);

    setCurrentPage("tickets");
  };

  if (!isLoggedIn) {

    return (
      <LoginPage
        setIsLoggedIn={setIsLoggedIn}
        setCurrentOwner={setCurrentOwner}
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

      <AppNavBar
        currentOwner={currentOwner}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedTicket={setSelectedTicket}
        setSelectedClosedTicket={setSelectedClosedTicket}
        handleLogout={handleLogout}
        isAdmin={isAdmin}
      />

      <AppPageContent
        tickets={tickets}
        selectedTicket={selectedTicket}
        setSelectedTicket={setSelectedTicket}
        selectedClosedTicket={selectedClosedTicket}
        setSelectedClosedTicket={setSelectedClosedTicket}
        selectedOwner={selectedOwner}
        setSelectedOwner={setSelectedOwner}
        currentOwner={currentOwner}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        fetchTickets={fetchTickets}
        isAdmin={isAdmin}
      />

    </div>
  );
}

export default App;