import { SortTickets } from "../utils/SortTickets";

test("sorts created dates newest to oldest by default", () => {

  const tickets = [
    {
      ticketId: "1",
      createdAt: "2026-06-10T10:00:00"
    },
    {
      ticketId: "2",
      createdAt: "2026-06-14T10:00:00"
    }
  ];

  const result = SortTickets({
    tickets: tickets,
    sortField: "createdAt",
    sortDirection: "default"
  });

  expect(result[0].ticketId).toBe("2");
});

test("reverses created date sorting", () => {

  const tickets = [
    {
      ticketId: "1",
      createdAt: "2026-06-10T10:00:00"
    },
    {
      ticketId: "2",
      createdAt: "2026-06-14T10:00:00"
    }
  ];

  const result = SortTickets({
    tickets: tickets,
    sortField: "createdAt",
    sortDirection: "reverse"
  });

  expect(result[0].ticketId).toBe("1");
});

test("sorts priority from most important to least important by default", () => {

  const tickets = [
    {
      ticketId: "1",
      priority: "Low"
    },
    {
      ticketId: "2",
      priority: "Critical"
    },
    {
      ticketId: "3",
      priority: "Medium"
    }
  ];

  const result = SortTickets({
    tickets: tickets,
    sortField: "priority",
    sortDirection: "default"
  });

  expect(
    result.map((ticket) => ticket.priority)
  ).toEqual([
    "Critical",
    "Medium",
    "Low"
  ]);
});

test("sorts title details alphabetically by default", () => {

  const tickets = [
    {
      ticketId: "1",
      title: "Zebra issue",
      description: ""
    },
    {
      ticketId: "2",
      title: "Apple issue",
      description: ""
    }
  ];

  const result = SortTickets({
    tickets: tickets,
    sortField: "titleDetails",
    sortDirection: "default"
  });

  expect(result[0].title).toBe("Apple issue");
});