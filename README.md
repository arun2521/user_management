# React User Management CRUD

A scalable and extensible React-based CRUD application to manage user data.  
Built with maintainability, reusability, and clean architecture in mind.

---

## Tech Stack

- React (Vite)
- Ant Design
- Axios
- JSON Server (Mock API)
- CSS (modular, responsive)

---

## Features

- Create, Read, Update, Delete users
- Dynamic form rendering using configuration
- Field validations (required, phone format, email format)
- Reusable Table component
- Loading & error handling
- Responsive across desktop, tablet, and mobile
- Clean separation of UI, API, and configuration

---

## Project Structure

src/
├── api/ → API communication layer
├── components/ → reusable components (Table)
├── config/ → dynamic form schema
├── features/users/ → User domain (Form, List, Page)
└── App.jsx → routing

- db.json for mock api
