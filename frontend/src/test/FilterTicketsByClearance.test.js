import { FilterTicketsByClearance } from "../utils/FilterTicketsByClearance";

const tickets = [
  {
    ticketId: "1",
    title: "Network issue",
    category: "Network"
  },
  {
    ticketId: "2",
    title: "Phone issue",
    category: "Phone"
  },
  {
    ticketId: "3",
    title: "Email issue",
    category: "Email"
  },
  {
    ticketId: "4",
    title: "Laptop issue",
    category: "Personal Computing"
  }
];

test("Admin can see all tickets", () => {

  const result = FilterTicketsByClearance({
    tickets: tickets,
    currentOwner: {
      clearanceLevel: "Admin"
    }
  });

  expect(result).toHaveLength(4);
});

test("Manager can see all tickets", () => {

  const result = FilterTicketsByClearance({
    tickets: tickets,
    currentOwner: {
      clearanceLevel: "Manager"
    }
  });

  expect(result).toHaveLength(4);
});

test("Network owner only sees network tickets", () => {

  const result = FilterTicketsByClearance({
    tickets: tickets,
    currentOwner: {
      clearanceLevel: "Network"
    }
  });

  expect(result).toHaveLength(1);

  expect(result[0].category).toBe("Network");
});

test("Phone owner only sees phone tickets", () => {

  const result = FilterTicketsByClearance({
    tickets: tickets,
    currentOwner: {
      clearanceLevel: "Phone"
    }
  });

  expect(result).toHaveLength(1);

  expect(result[0].category).toBe("Phone");
});

test("General owner sees email and personal computing tickets", () => {

  const result = FilterTicketsByClearance({
    tickets: tickets,
    currentOwner: {
      clearanceLevel: "General"
    }
  });

  expect(result).toHaveLength(2);

  expect(
    result.map((ticket) => ticket.category)
  ).toEqual([
    "Email",
    "Personal Computing"
  ]);
});