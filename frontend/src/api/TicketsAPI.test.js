import { updateTicketWithHistory } from "./TicketsAPI";

beforeEach(() => {

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({})
    })
  );

});

afterEach(() => {

  jest.resetAllMocks();

});

// tests that status, priority, and owner changes create history records
test("records history entries when important ticket fields change", async () => {

  const originalTicket = {
    ticketId: "ticket-1",
    status: "Open",
    priority: "Low",
    ownerId: "",
    ownerName: ""
  };

  const updatedTicket = {
    ticketId: "ticket-1",
    status: "In Progress",
    priority: "High",
    ownerId: "owner-1",
    ownerName: "Luci"
  };

  const currentOwner = {
    ownerId: "owner-1",
    name: "Luci"
  };

  await updateTicketWithHistory(
    updatedTicket,
    originalTicket,
    currentOwner
  );

  expect(fetch).toHaveBeenCalledWith(
    "http://localhost:8080/tickets/ticket-1",
    expect.objectContaining({
      method: "PUT"
    })
  );

  expect(fetch).toHaveBeenCalledWith(
    "http://localhost:8080/ticket-updates/create",
    expect.objectContaining({
      method: "POST",
      body: expect.stringContaining("STATUS_CHANGE")
    })
  );

  expect(fetch).toHaveBeenCalledWith(
    "http://localhost:8080/ticket-updates/create",
    expect.objectContaining({
      method: "POST",
      body: expect.stringContaining("PRIORITY_CHANGE")
    })
  );

  expect(fetch).toHaveBeenCalledWith(
    "http://localhost:8080/ticket-updates/create",
    expect.objectContaining({
      method: "POST",
      body: expect.stringContaining("OWNER_CHANGE")
    })
  );
});