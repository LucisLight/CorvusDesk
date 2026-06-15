# CorvusDesk

CorvusDesk is a local service request tracking system built with a Spring Boot backend, MongoDB database, and React frontend. The application is designed to help support staff create, assign, update, close, reopen, sort, and review service request tickets.

## Project Overview

CorvusDesk works like a small help desk system. Owners can log in, view tickets, create new requests, assign owners, update ticket information, add comments, review request history, and manage closed tickets. The system also supports clearance levels so different owners only see the tickets they are allowed to work on.

## Tech Stack

### Backend

* Java
* Spring Boot
* Maven
* MongoDB Atlas
* Lombok

### Frontend

* React
* JavaScript
* CSS
* Create React App
* React Testing Library
* Jest

## Known Working Features

### Owner Login

Owners can log in with a username and password. After login, the app stores the current owner and uses that owner for ticket comments, request history, and clearance-based ticket visibility.

The login page also includes a create-owner option for setup and demo use.

### Owner Management

Admin users can manage owners from the Owners page.

Working owner management features include:

* View all owners
* Add new owners
* Edit owner name, email, and phone
* Edit owner username and password
* Edit owner clearance level
* Delete owners

### Owner Clearance Levels

Owners have a clearance level that controls what they can see and manage.

| Clearance Level | Access                                       |
| --------------- | -------------------------------------------- |
| Admin           | Can see all tickets and manage owners        |
| Manager         | Can see all tickets but cannot manage owners |
| Network         | Can only see Network tickets                 |
| Phone           | Can only see Phone tickets                   |
| General         | Can see Email and Personal Computing tickets |

Admin users can access owner management. Manager users can view all ticket categories but cannot manage owners. Network, Phone, and General users only see tickets that match their assigned area.

### Ticket Creation

Users can create service request tickets with requester information, category, priority, owner assignment, title, and description.

Ticket fields include:

* Title
* Description
* Requester name
* Requester email
* Requester phone
* Category
* Priority
* Status
* Assigned owner
* Created date
* Updated date

### Ticket List

The All Tickets page displays active tickets. Closed tickets are filtered out of the All Tickets page and moved into the Closed Tickets page.

The ticket list supports:

* Status filtering
* Priority filtering
* Search by title, description, requester, owner, category, or ticket ID
* Clearance-based ticket visibility
* Clickable column sorting

### Ticket Search and Filters

Tickets can be filtered and searched from the ticket list.

Working filters include:

* Status filter
* Priority filter
* Search text field

The search field checks:

* Ticket title
* Ticket description
* Requester name
* Owner name
* Category
* Ticket ID

### Clickable Column Sorting

Ticket tables support clickable column sorting. The user clicks the column heading, and an arrow appears beside the active column.

Sorting behavior:

* First click shows a down arrow and applies the default sort
* Second click shows an up arrow and reverses the sort
* Third click clears the sort
* Clicking a different column clears the previous sort and sorts by the new column

Sortable fields include:

* Created date
* Status
* Priority
* Title / Details
* Requester
* Owner
* Updated date
* Closed date on the Closed Tickets page

Sorting still works while filters and search are active.

### Ticket Detail Page

Active tickets open into a ticket detail page where users can view and update ticket information.

Working ticket detail features include:

* View ticket information
* View requester information
* View assigned owner information
* Update status
* Update priority
* Update assigned owner
* Save ticket changes
* Delete tickets
* Add comments
* View request history

### Comments and Request History

Tickets include a Comments and Request History panel.

Working history features include:

* Add comments to active tickets
* View comments on active tickets
* View comments on closed tickets
* Record status changes
* Record priority changes
* Record owner changes
* Show who made the update
* Show when the update happened

Closed tickets still show existing comments and history, but they do not allow new comments unless the ticket is reopened.

### Closed Tickets Page

Closed tickets are moved to a separate Closed Tickets page.

Working closed ticket features include:

* Closed tickets are hidden from All Tickets
* Only Closed tickets appear on the Closed Tickets page
* Closed tickets open in a separate read-only detail page
* Closed tickets can be reopened
* Closed tickets can be deleted
* Closed tickets still show comments and request history
* Closed tickets cannot be edited unless reopened
* Closed tickets cannot receive new comments unless reopened

Resolved tickets stay in the active ticket workflow. Only tickets with the status `Closed` move to the Closed Tickets page.

### Reopen Closed Tickets

Closed tickets can be reopened from the closed ticket detail page. Reopening a ticket changes its status back to `Open` and sends it back to the All Tickets page.

A history entry is also created when a ticket is reopened.

### Refactored Frontend Structure

The frontend was refactored to keep the app easier to maintain.

Refactored areas include:

* Navigation moved into `AppNavBar`
* Page rendering moved into `AppPageContent`
* Ticket filtering moved into `FilterTickets`
* Clearance filtering moved into `FilterTicketsByClearance`
* Ticket sorting moved into `SortTickets`
* Sortable table headers moved into `SortableHeader`
* Login form sections moved into smaller components
* Create ticket form sections moved into smaller components
* Closed ticket detail components separated from active ticket detail components

## Backend Structure

```text
backend
├── src
│   ├── main
│   │   ├── java/com/luci/Helpdesk_Jang
│   │   │   ├── controller
│   │   │   │   ├── OwnerController.java
│   │   │   │   ├── TicketController.java
│   │   │   │   └── TicketUpdateController.java
│   │   │   ├── model
│   │   │   │   ├── Owner.java
│   │   │   │   ├── Ticket.java
│   │   │   │   └── TicketUpdate.java
│   │   │   ├── repository
│   │   │   │   ├── OwnerRepository.java
│   │   │   │   ├── TicketRepository.java
│   │   │   │   └── TicketUpdateRepository.java
│   │   │   ├── service
│   │   │   │   ├── OwnerService.java
│   │   │   │   ├── TicketService.java
│   │   │   │   └── TicketUpdateService.java
│   │   │   ├── ConfigCheck.java
│   │   │   ├── HelpdeskJangApplication.java
│   │   │   └── MongoConfig.java
│   │   └── resources
│   │       └── application.properties
│   └── test
│       └── java/com/luci/Helpdesk_Jang
│           ├── service
│           │   └── TicketServiceTest.java
│           └── HelpdeskJangApplicationTests.java
├── mvnw
├── mvnw.cmd
└── pom.xml
```

## Frontend Structure

```text
frontend
├── public
│   ├── corvus-logo.png
│   ├── small-corvus.png
│   └── index.html
├── src
│   ├── api
│   │   ├── TicketsAPI.js
│   │   └── TicketUpdatesAPI.js
│   ├── components
│   │   ├── AppNavBar.js
│   │   ├── AppPageContent.js
│   │   ├── ClosedTicketActions.js
│   │   ├── ClosedTicketInfoCard.js
│   │   ├── ClosedTicketOwnerCard.js
│   │   ├── CreateOwnerForm.js
│   │   ├── CreateRequesterFields.js
│   │   ├── CreateTicketFields.js
│   │   ├── CreateTicketOwnerSelect.js
│   │   ├── LoginForm.js
│   │   ├── LoginMessage.js
│   │   ├── OwnerInformationCard.js
│   │   ├── RequesterInformationCard.js
│   │   ├── SortableHeader.js
│   │   ├── TicketDetailActions.js
│   │   ├── TicketFilters.js
│   │   ├── TicketInformationCard.js
│   │   └── TicketRow.js
│   ├── pages
│   │   ├── AddOwnerPage.js
│   │   ├── ClosedTicketDetailPage.js
│   │   ├── ClosedTicketsPage.js
│   │   ├── CreateTicketPage.js
│   │   ├── EditOwnerPage.js
│   │   ├── LoginPage.js
│   │   ├── TicketDetailPage.js
│   │   ├── TicketListPage.js
│   │   ├── TicketUpdatesPanel.js
│   │   └── ViewOwnersPage.js
│   ├── test
│   │   ├── ClosedTicketsPage.test.js
│   │   ├── FilterTicketsByClearance.test.js
│   │   ├── SortTickets.test.js
│   │   ├── TicketListPage.test.js
│   │   ├── TicketsAPI.test.js
│   │   └── TicketUpdatesPanel.test.js
│   ├── utils
│   │   ├── FilterTickets.js
│   │   ├── FilterTicketsByClearance.js
│   │   └── SortTickets.js
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── setupTests.js
│   └── reportWebVitals.js
├── package.json
└── package-lock.json
```

## Backend API Endpoints

### Tickets

| Method | Endpoint              | Purpose             |
| ------ | --------------------- | ------------------- |
| GET    | `/tickets`            | Get all tickets     |
| POST   | `/tickets/create`     | Create a new ticket |
| PUT    | `/tickets/{ticketId}` | Update a ticket     |
| DELETE | `/tickets/{ticketId}` | Delete a ticket     |

### Owners

| Method | Endpoint            | Purpose            |
| ------ | ------------------- | ------------------ |
| GET    | `/owners`           | Get all owners     |
| POST   | `/owners/create`    | Create a new owner |
| POST   | `/owners/login`     | Log in an owner    |
| PUT    | `/owners/{ownerId}` | Update an owner    |
| DELETE | `/owners/{ownerId}` | Delete an owner    |

### Ticket Updates

| Method | Endpoint                            | Purpose                               |
| ------ | ----------------------------------- | ------------------------------------- |
| GET    | `/ticket-updates/ticket/{ticketId}` | Get comments and history for a ticket |
| POST   | `/ticket-updates/create`            | Create a comment or history entry     |

## Required Downloads and Dependencies

Before running CorvusDesk locally, make sure the following tools are installed:

### Required Downloads

* Java JDK 17 or newer
* Node.js and npm
* MongoDB Atlas account or MongoDB connection string
* Git
* VS Code or another code editor

### Backend Dependencies

The backend uses Maven. Dependencies are managed in `backend/pom.xml`, so they should install automatically when the backend is built or started.

Main backend dependencies include:

* Spring Boot Web
* Spring Boot Data MongoDB
* Spring Boot Validation
* Lombok
* JUnit / Spring Boot Test

To install/build backend dependencies, run this from the backend folder:

```bash
cd backend
.\mvnw clean install
```

To run the backend:

```bash
.\mvnw spring-boot:run
```

### Frontend Dependencies

The frontend uses npm. Dependencies are managed in `frontend/package.json`.

Main frontend dependencies include:

* React
* React DOM
* React Scripts
* React Testing Library
* Jest DOM
* User Event
* Web Vitals

To install frontend dependencies, run this from the frontend folder:

```bash
cd frontend
npm install
```

To run the frontend:

```bash
npm start
```

To run frontend tests:

```bash
npm test
```

### MongoDB Configuration

The backend requires a MongoDB connection string in `application.properties`.

The file is located here:

```text
backend/src/main/resources/application.properties
```

Example property:

```properties
spring.data.mongodb.uri=your_mongodb_connection_string_here
```

The backend runs on:

```text
http://localhost:8080
```

The frontend runs on:

```text
http://localhost:3000
```


## Running the Project Locally

### Backend

Open a terminal in the backend folder:

```bash
cd backend
.\mvnw spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### Frontend

Open a separate terminal in the frontend folder:

```bash
cd frontend
npm install
npm start
```

The frontend runs on:

```text
http://localhost:3000
```

## Running Tests

### Frontend Tests

Open a terminal in the frontend folder:

```bash
cd frontend
npm test
```

The frontend test suite includes tests for:

* Ticket list filtering
* Closed ticket page behavior
* Clearance-based ticket visibility
* Sorting helper behavior
* Ticket comments and request history
* Ticket update history API helper
* App login page rendering

### Backend Tests

Open a terminal in the backend folder:

```bash
cd backend
.\mvnw test
```

## Author  

Luci Crow
Corvus Desk Dev Team
