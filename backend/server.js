const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const notesRoutes = require("./routes/notes");
app.use("/api/notes", notesRoutes)

app.get("/", (req, res) => {
    res.send("API is working");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log("Server running on port " + PORT);
});

