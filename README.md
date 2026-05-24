# CorvusDesk

CorvusDesk is a full-stack help desk and ticket management system built using React, Spring Boot, MongoDB Atlas, and RESTful APIs. The project was designed to simulate a real-world enterprise ticketing platform with modular frontend architecture, layered backend design, owner management, ticket workflows, branding integration, and dashboard-based navigation.

---

# Features

## Ticket Management

* Create support tickets
* View all tickets in dashboard layout
* View detailed ticket information
* Delete tickets
* Ticket priority system
* Ticket category system
* Ticket owner assignment
* Requester information tracking

## Owner Management

* Create new owners/technicians
* View all owners in management dashboard
* Delete owners
* Store owner email and phone information
* Assign existing owners through dropdown selection

## Frontend Features

* Multi-page React architecture
* Login landing page
* Branded CorvusDesk UI
* Dashboard-style layouts
* Active navigation highlighting
* Reusable React page components
* Validation messaging for required fields
* Responsive sectioned detail views

## Backend Features

* REST API architecture
* Layered Spring Boot structure
* MongoDB Atlas cloud persistence
* Separate collections for tickets and owners
* Validation support using Jakarta Validation
* Repository-service-controller architecture

---

# Technologies Used

## Frontend

* React
* JavaScript
* HTML
* CSS Inline Styling

## Backend

* Java
* Spring Boot
* Maven
* Lombok
* Jakarta Validation

## Database

* MongoDB Atlas

## Development Tools

* Visual Studio Code
* Git
* GitHub

---

# System Architecture

The backend follows a layered architecture pattern:

## Controller Layer

Handles incoming HTTP requests and API routing.

Examples:

* TicketController
* OwnerController

## Service Layer

Contains business logic and application behavior.

Examples:

* TicketService
* OwnerService

## Repository Layer

Handles database communication using MongoRepository.

Examples:

* TicketRepository
* OwnerRepository

## Model Layer

Stores application data structures.

Examples:

* Ticket
* Owner

---

# Frontend Structure

```text
frontend/
├── public/
│   ├── corvus-logo.png
│   └── small-corvus.png
│
├── src/
│   ├── pages/
│   │   ├── AddOwnerPage.js
│   │   ├── CreateTicketPage.js
│   │   ├── LoginPage.js
│   │   ├── TicketDetailPage.js
│   │   ├── TicketListPage.js
│   │   └── ViewOwnersPage.js
│   │
│   ├── App.js
│   ├── main.jsx
│   └── index.css
```

---

# Backend Structure

```text
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/luci/Helpdesk_Jang/
│   │   │       ├── controller/
│   │   │       │   ├── OwnerController.java
│   │   │       │   └── TicketController.java
│   │   │       │
│   │   │       ├── model/
│   │   │       │   ├── Owner.java
│   │   │       │   └── Ticket.java
│   │   │       │
│   │   │       ├── repository/
│   │   │       │   ├── OwnerRepository.java
│   │   │       │   └── TicketRepository.java
│   │   │       │
│   │   │       ├── service/
│   │   │       │   ├── OwnerService.java
│   │   │       │   └── TicketService.java
│   │   │       │
│   │   │       └── HelpdeskJangApplication.java
│   │   │
│   │   └── resources/
│   │       └── application.properties
│   │
│   └── test/
│       └── java/
│           └── service/
│               └── TicketServiceTest.java
```

---

# Ticket Categories

CorvusDesk currently supports:

* Network
* Personal Computing
* Email
* Phone

---

# Ticket Priorities

Current priority levels:

* Low
* Medium
* High
* Critical

---

# Validation

Validation has been partially implemented using Jakarta Validation.

Currently validated:

* Ticket title
* Ticket description
* Requester name
* Owner name

Additional frontend and backend validation improvements are planned for future updates.

---

# Unit Tests

Implemented unit tests include:

* Successful ticket creation
* Invalid ticket validation
* Default status assignment
* Retrieve all tickets
* Retrieve ticket by ID

---

# Running The Project

## Prerequisites

Install:

* Java JDK 17+
* Node.js
* npm
* Maven

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Run Spring Boot backend

```bash
./mvnw spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

# Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# MongoDB Atlas Configuration

Inside:

```text
backend/src/main/resources/application.properties
```

configure your MongoDB Atlas connection string.

Example:

```properties
spring.data.mongodb.uri=YOUR_CONNECTION_STRING
spring.data.mongodb.database=HelpDesk
```

---

# Branding

CorvusDesk branding was custom designed for the application.

Branding includes:

* Login landing page
* CorvusDesk logo system
* Dashboard navigation bar
* Unified pink/white/charcoal color palette
* Enterprise dashboard-inspired layouts

---

# Future Improvements

Planned future updates include:

* Ticket editing
* Search and filtering
* Authentication system
* Comment/history tracking
* File attachments
* Dark mode
* Dashboard analytics
* Department management
* Expanded validation
* Status workflow automation

---

# Author

Luci Crow

CorvusDesk was developed as a full-stack help desk management project focused on scalable architecture, enterprise-inspired UI design, and modular application structure.
