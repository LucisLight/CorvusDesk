import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ClosedTicketsPage from "../pages/ClosedTicketsPage";

test("shows only closed tickets and opens selected closed ticket", async () => {

  const setSelectedClosedTicket = jest.fn();

  const tickets = [
    {
      ticketId: "1",
      title: "Closed network issue",
      status: "Closed",
      priority: "High",
      requesterName: "Luci",
      updatedAt: "2026-06-14T10:00:00"
    },
    {
      ticketId: "2",
      title: "Open email issue",
      status: "Open",
      priority: "Low",
      requesterName: "Seth",
      updatedAt: "2026-06-14T11:00:00"
    }
  ];

  render(
    <ClosedTicketsPage
      tickets={tickets}
      setSelectedClosedTicket={setSelectedClosedTicket}
      currentOwner={{
        name: "Admin User",
        clearanceLevel: "Admin"
      }}
    />
  );

  expect(
    screen.getByText(/Closed network issue/i)
  ).toBeInTheDocument();

  expect(
    screen.queryByText(/Open email issue/i)
  ).not.toBeInTheDocument();

  await userEvent.click(
    screen.getByText(/View/i)
  );

  expect(
    setSelectedClosedTicket
  ).toHaveBeenCalledWith(tickets[0]);
});