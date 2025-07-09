# brr-dashboard

# Ticket Management Dashboard

A simple Internal Team dashboard built with React, TypeScript and Express. It provides functionality to view, add, and delete tickets. It also includes a display of new joiners, all staff members, and a to-do list to view all tasks.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd <your-repo-directory>

   ```

2. **Setup the frontend** - from the root folder

   ```bash
   cd frontend
   npm install
   npm start

   ```

3. **Setup the backend** - from the root folder

   ```bash
   cd backend
   node index.js
   ```

- You should get a message on your terminal if successful - `Mock API server running at http://localhost:4000`

## Summary of features completed

**Welcome Page**

- A Welcome section explaining an overview of the website

- A Summary section with open tickets, pending tasks (with a status of 'to-do'), and a latest updates column with all of this month's new joiners

**Tickets Page**

- View list of tickets.

- Add a new ticket

- Delete a ticket

**Staff Page**

- Displays a list of all staff members via Tailwind CSS cards.
- Contains name, email, role, individual photo (AI-generated pictures), a more information button, and a button to say hi to anyone who joined within the last month (button has a mail:to function to send an email to their address)

# Data Persistence

All data is read from and written to local JSON files (simulated database).

**Bonus Content**

- Used TypeScript

- Simple router-based navigation with React Router

- UX polish

- Used Tailwind CSS for styling

- Unit tests in Jest

**Assumptions Made**

- Ticket ids are generated server-side to avoid conflicts.

- A simple JSON file acts as a mock database (no real DB used) for the to-do lists and the tickets data. The staff data is written in a JavaScript file in order to be able to generate the images and display them on the frontend.

- File uploads on the tickets page (in the AddTicketModal component) are currently mocked — no actual file saving.

- Only one user ("localuser") is used for demonstration when creating new tickets.

**If I Had More Time**

- Add form validation with feedback messages.

- Use the 'more information' button on the Staff component to display information about the user's last login date, and device information

- Clean up Tailwind CSS styles for better readability

- use React Query for fetching data to better handle larger amounts of data and improve scalability

- Improve accessibility and responsiveness of modals.

- Implement proper file uploads and attach them to tickets.

- Add option to edit the to-do lists and the tickets.

- Add filtering, searching, and sorting to the ticket view.

- Add login/authentication for multiple users using React hooks, and create minimum 2-3 user types (regular user, staff member, admin)

- Replace the mock JSON database with a real DB (e.g., MongoDB, PostgreSQL).

- Improve error handling on both frontend and backend.

- Add more unit testing in Jest, including in App.test.tsx to check if the browser routes work as expected

- Add more frontend components (e.g. footer, About page, etc.)

- Add infinite scroll / limit the number of tasks, tickets, or staff members that can be viewed at once to better handle more data incoming from the backend

- Shrink down the text in the tickets card to make all of them the same size
