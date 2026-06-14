import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import TicketUpdatesPanel from "./TicketUpdatesPanel";

beforeEach(() => {

  global.fetch = jest.fn();

});

afterEach(() => {

  jest.resetAllMocks();

});

// tests that existing comments are pulled from the backend and shown
test("retrieves and displays comments or notes", async () => {

  fetch.mockResolvedValueOnce({
    json: async () => [
      {
        ticketUpdateId: "update-1",
        ticketId: "ticket-1",
        updateType: "COMMENT",
        message: "Checked the printer and it is still offline.",
        createdByOwnerName: "Luci",
        createdAt: "2026-06-14T12:00:00"
      }
    ]
  });

  render(
    <TicketUpdatesPanel
      ticketId="ticket-1"
      currentOwner={{
        ownerId: "owner-1",
        name: "Luci"
      }}
      refreshKey={0}
    />
  );

  expect(
    await screen.findByText(
      "Checked the printer and it is still offline."
    )
  ).toBeInTheDocument();

  expect(
    screen.getByText("COMMENT")
  ).toBeInTheDocument();

  expect(
    screen.getByText(/By Luci/i)
  ).toBeInTheDocument();
});

// tests adding a new comment through the comment form
test("adds a comment or note", async () => {

  fetch
    .mockResolvedValueOnce({
      json: async () => []
    })
    .mockResolvedValueOnce({
      json: async () => ({
        ticketUpdateId: "update-2"
      })
    })
    .mockResolvedValueOnce({
      json: async () => [
        {
          ticketUpdateId: "update-2",
          ticketId: "ticket-1",
          updateType: "COMMENT",
          message: "New comment from test.",
          createdByOwnerName: "Luci",
          createdAt: "2026-06-14T12:05:00"
        }
      ]
    });

  render(
    <TicketUpdatesPanel
      ticketId="ticket-1"
      currentOwner={{
        ownerId: "owner-1",
        name: "Luci"
      }}
      refreshKey={0}
    />
  );

  fireEvent.change(
    screen.getByPlaceholderText(
      /add a comment or note/i
    ),
    {
      target: {
        value: "New comment from test."
      }
    }
  );

  fireEvent.click(
    screen.getByRole("button", {
      name: /add comment/i
    })
  );

  await waitFor(() => {

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:8080/ticket-updates/create",
      expect.objectContaining({
        method: "POST"
      })
    );
  });

  expect(
    await screen.findByText("New comment from test.")
  ).toBeInTheDocument();
});

// tests that history entries can be retrieved and displayed
test("retrieves and displays request history entries", async () => {

  fetch.mockResolvedValueOnce({
    json: async () => [
      {
        ticketUpdateId: "update-3",
        ticketId: "ticket-1",
        updateType: "STATUS_CHANGE",
        message: "Status changed from Open to In Progress.",
        createdByOwnerName: "Luci",
        createdAt: "2026-06-14T12:10:00"
      }
    ]
  });

  render(
    <TicketUpdatesPanel
      ticketId="ticket-1"
      currentOwner={{
        ownerId: "owner-1",
        name: "Luci"
      }}
      refreshKey={0}
    />
  );

  expect(
    await screen.findByText(
      "Status changed from Open to In Progress."
    )
  ).toBeInTheDocument();

  expect(
    screen.getByText("STATUS_CHANGE")
  ).toBeInTheDocument();
});