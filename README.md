# Notes App (Full Stack CRUD Web Application)

## Overview

This project is a full-stack notes management web application that allows users to create, edit, and delete notes.
The application demonstrates a complete client-server architecture using a modern web stack.

The system stores notes in a database and displays them dynamically on the web page.

---

## Live Demo

Frontend (User Interface):
https://notes-app-lovat-eight.vercel.app

Backend API:
https://notes-app-production-98b8.up.railway.app/api/notes

---

## Tech Stack

### Frontend

* Vue 3 (Vite)
* Axios
* HTML/CSS

### Backend

* Node.js
* Express.js
* REST API

### Database

* SQLite3

### Deployment

* Frontend: Vercel
* Backend: Railway

---

## Features

* Create new notes
* View all notes
* Edit existing notes
* Delete notes
* Notes sorted by creation time
* Persistent database storage
* Full CRUD API

---

## API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/notes     | Get all notes   |
| GET    | /api/notes/:id | Get single note |
| POST   | /api/notes     | Create a note   |
| PUT    | /api/notes/:id | Update a note   |
| DELETE | /api/notes/:id | Delete a note   |

---

## How to Run Locally

### 1. Clone repository

git clone https://github.com/WonChuJun/notes-app.git

### 2. Backend

cd backend
npm install
node server.js

### 3. Frontend

cd frontend
npm install
npm run dev

---

## Author

Won Chu Jun
Bachelor of Computer Science Student

This project was developed as a full-stack web application practice and portfolio project.
