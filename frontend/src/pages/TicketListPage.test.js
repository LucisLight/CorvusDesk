import { render, screen, fireEvent } from "@testing-library/react";
import TicketListPage from "./TicketListPage";

const testTickets = [
  {
    ticketId: "1",
    title: "Printer Issue",
    description: "Printer offline",
    requesterName: "Luci",
    status: "Open",
    priority: "High",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    ticketId: "2",
    title: "Network Problem",
    description: "WiFi down",
    requesterName: "Bob",
    status: "Closed",
    priority: "Low",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

//Test One
test(
  "filters by status",
  () => {

    render(
      <TicketListPage
        tickets={testTickets}
        setSelectedTicket={() => {}}
        fetchTickets={() => {}}
      />
    );

    fireEvent.change(
      screen.getByDisplayValue(
        "All Statuses"
      ),
      {
        target: {
          value: "Open"
        }
      }
    );

    expect(
      screen.getByText(
        "Printer Issue"
      )
    ).toBeInTheDocument();
  }
);

//Test Two

test(
  "filters by priority",
  () => {

    render(
      <TicketListPage
        tickets={testTickets}
        setSelectedTicket={() => {}}
        fetchTickets={() => {}}
      />
    );

    fireEvent.change(
      screen.getByDisplayValue(
        "All Priorities"
      ),
      {
        target: {
          value: "High"
        }
      }
    );

    expect(
      screen.getByText(
        "Printer Issue"
      )
    ).toBeInTheDocument();
  }
);

//Test Three

test(
  "filters by requester",
  () => {

    render(
      <TicketListPage
        tickets={testTickets}
        setSelectedTicket={() => {}}
        fetchTickets={() => {}}
      />
    );

    fireEvent.change(
      screen.getByPlaceholderText(
        /search/i
      ),
      {
        target: {
          value: "Luci"
        }
      }
    );

    expect(
      screen.getByText(
        "Printer Issue"
      )
    ).toBeInTheDocument();
  }
);

//Test Four

test(
  "searches title or description",
  () => {

    render(
      <TicketListPage
        tickets={testTickets}
        setSelectedTicket={() => {}}
        fetchTickets={() => {}}
      />
    );

    fireEvent.change(
      screen.getByPlaceholderText(
        /search/i
      ),
      {
        target: {
          value: "Printer"
        }
      }
    );

    expect(
      screen.getByText(
        "Printer Issue"
      )
    ).toBeInTheDocument();
  }
);

//Test Five

test(
  "shows no results message",
  () => {

    render(
      <TicketListPage
        tickets={testTickets}
        setSelectedTicket={() => {}}
        fetchTickets={() => {}}
      />
    );

    fireEvent.change(
      screen.getByPlaceholderText(
        /search/i
      ),
      {
        target: {
          value: "DoesNotExist"
        }
      }
    );

    expect(
      screen.getByText(
        /No tickets/i
      )
    ).toBeInTheDocument();
  }
);