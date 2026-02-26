const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Railway writable directory
const dbPath = process.env.RAILWAY_ENVIRONMENT
  ? "/tmp/notes.db"
  : path.join(__dirname, "notes.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Database error:", err.message);
  } else {
    console.log("Database connected successfully at:", dbPath);
  }
});

// create table if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;