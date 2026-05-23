import { useEffect, useState } from "react";

function App() {

  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requesterName: ""
  });

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const response = await fetch("http://localhost:8080/tickets");
    const data = await response.json();

    setTickets(data);
  };

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    await fetch("http://localhost:8080/tickets/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    fetchTickets();

    setFormData({
      title: "",
      description: "",
      requesterName: ""
    });
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>HelpDesk Request System</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="requesterName"
          placeholder="Requester Name"
          value={formData.requesterName}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Create Ticket
        </button>

      </form>

      <hr />

      <h2>All Tickets</h2>

    {selectedTicket ? (

     <div
        style={{
          border: "2px solid hotpink",
          padding: "20px"
        }}
      >

        <button
          onClick={() => setSelectedTicket(null)}
          style={{
            marginBottom: "15px"
          }}
        >
          Back
        </button>

        <h2>{selectedTicket.title}</h2>

        <p>
          <strong>Description:</strong>
          {" "}
          {selectedTicket.description}
        </p>

        <p>
          <strong>Requester:</strong>
          {" "}
          {selectedTicket.requesterName}
        </p>

       <p>
          <strong>Status:</strong>
          {" "}
          {selectedTicket.status}
        </p>

        <p>
          <strong>Request ID:</strong>
          {" "}
          {selectedTicket.ticketId.substring(0, 8)}
        </p>

        <p>
          <strong>Created:</strong>
          {" "}
          {new Date(selectedTicket.createdAt).toLocaleString()}
        </p>

      </div>

    ) : (

      tickets.map((ticket) => (

        <div
          key={ticket.ticketId}
          onClick={() => setSelectedTicket(ticket)}
             style={{
               border: "1px solid black",
               padding: "10px",
               marginBottom: "10px",
               cursor: "pointer"
             }}>

          <h3>{ticket.title}</h3>

          <p>{ticket.description}</p>

          <p>
            <strong>Requester:</strong> {ticket.requesterName}
          </p>

          <p>
            <strong>Request ID:</strong> {ticket.ticketId.substring(0, 8)}
          </p>

          <p>
            <strong>Created:</strong> {ticket.createdAt}
          </p>

          <p>
            <strong>Status:</strong> {ticket.status}
          </p>

        </div>
      )))}

    </div>
  );
}

export default App;