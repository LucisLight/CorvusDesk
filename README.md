# CorvusDesk

CorvusDesk is a full-stack help desk and ticket management application built using React, Spring Boot, and MongoDB Atlas. The application allows users to create, manage, update, and track support tickets through a responsive multi-page interface with integrated owner management, workflow validation, and status tracking.

The project was designed to simulate a realistic internal help desk platform while following layered architecture principles and full-stack development practices.

---

# Technologies Used

## Frontend
- React
- JavaScript
- HTML/CSS
- Responsive CSS Grid Layouts

## Backend
- Java
- Spring Boot
- REST APIs
- Maven

## Database
- MongoDB Atlas

## Testing
- JUnit
- Mockito

---

# Core Features

## Ticket Management
- Create tickets
- View all tickets
- View detailed ticket information
- Edit ticket status
- Edit ticket priority
- Delete tickets
- Assign owners to tickets

## Supported Statuses
- Open
- In Progress
- Resolved
- Closed

## Supported Priorities
- Low
- Medium
- High
- Critical

---

# Owner Management
- Add owners
- Edit owners
- Delete owners
- View all owners
- Assign owners directly to tickets

---

# Validation and Workflow Features
- Rejects invalid status values
- Rejects invalid priority values
- Handles updates on non-existent tickets
- Prevents accidental deletion of unresolved tickets
- Success messaging for create/update operations
- Dropdown validation for ticket workflows

---

# UI Features
- Full CorvusDesk branding integration
- Multi-page frontend architecture
- Responsive layouts
- Dynamic ticket grids
- Color-coded priority indicators
- Color-coded status indicators
- Login landing page
- Modern dashboard layout
- Responsive ticket table scaling

---

# Project Structure

## Backend Structure

```text
backend/
├── src/
│   ├── main/
│   │   ├── java/com/luci/Helpdesk_Jang/
│   │   │   ├── controller/
│   │   │   │   ├── OwnerController.java
│   │   │   │   └── TicketController.java
│   │   │   │
│   │   │   ├── model/
│   │   │   │   ├── Owner.java
│   │   │   │   └── Ticket.java
│   │   │   │
│   │   │   ├── repository/
│   │   │   │   ├── OwnerRepository.java
│   │   │   │   └── TicketRepository.java
│   │   │   │
│   │   │   ├── service/
│   │   │   │   ├── OwnerService.java
│   │   │   │   └── TicketService.java
│   │   │   │
│   │   │   ├── ConfigCheck.java
│   │   │   ├── MongoConfig.java
│   │   │   └── HelpdeskJangApplication.java
│   │   │
│   │   └── resources/
│   │       ├── static/
│   │       ├── templates/
│   │       └── application.properties
│   │
│   └── test/
│       └── java/com/luci/Helpdesk_Jang/service/
│           └── TicketServiceTest.java
│
├── pom.xml
├── mvnw
└── mvnw.cmd
```

---

## Frontend Structure

```text
frontend/
├── public/
│   ├── corvus-logo.png
│   ├── small-corvus.png
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   ├── pages/
│   │   ├── AddOwnerPage.js
│   │   ├── CreateTicketPage.js
│   │   ├── EditOwnerPage.js
│   │   ├── LoginPage.js
│   │   ├── TicketDetailPage.js
│   │   ├── TicketListPage.js
│   │   └── ViewOwnersPage.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── styles.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Running the Project

## Frontend Setup

Navigate into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## Backend Setup

Navigate into the backend directory:

```bash
cd backend
```

Run Spring Boot:

```bash
./mvnw spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

# MongoDB Configuration

Create an `application.properties` file inside:

```text
backend/src/main/resources/
```

Add your MongoDB Atlas connection string:

```properties
spring.data.mongodb.uri=YOUR_MONGODB_URI
spring.data.mongodb.database=Helpdesk
```

---

# Unit Testing

The application includes validation and workflow unit testing using JUnit and Mockito.

Current tests include:
- Valid status updates
- Valid priority assignment
- Valid priority updates
- Invalid status handling
- Invalid priority handling
- Non-existent ticket update attempts

Run tests using:

```bash
./mvnw test
```

---

# Future Improvements
- Authentication system
- Search and filtering
- Dashboard analytics
- Email notifications
- File attachments
- Role permissions
- Dark mode
- Ticket comments and history logs

---

# Authors
- Luci Crow
- CS351 Full Stack Project
- CorvusDesk Development Team