# Simple File Management System (Notes App)

## Overview

This project is a full-stack web application that allows users to create, read, update, and delete notes.
It demonstrates a RESTful architecture using Vue.js frontend, Node.js (Express) backend, and SQLite database.

## Tech Stack

Frontend:

* Vue.js (Vite)
* Axios

Backend:

* Node.js
* Express.js
* SQLite3

## Features

* Add a note (title + content)
* View all notes
* Edit a note
* Delete a note

## System Architecture

Vue Frontend → REST API (Express) → SQLite Database

The frontend sends HTTP requests using Axios to the backend API.
The backend processes requests and performs database operations using SQLite.

## API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| POST   | /api/notes     | Create a note   |
| GET    | /api/notes     | Get all notes   |
| GET    | /api/notes/:id | Get single note |
| PUT    | /api/notes/:id | Update note     |
| DELETE | /api/notes/:id | Delete note     |

## Running Locally

### Backend

cd backend
npm install
npm run dev

Runs on: http://localhost:3000

### Frontend

cd frontend
npm install
npm run dev

Runs on: http://localhost:5173

## Development Process (AI Usage)

AI tools were used to:

* Understand REST API structure
* Generate Express route templates
* Debug CORS and environment issues

All generated code was reviewed and modified manually to ensure correctness.

## Future Improvements

* Authentication
* Search functionality
* Tags/categories
