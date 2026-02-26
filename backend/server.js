const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
const notesRoutes = require("./routes/notes");
app.use("/api/notes", notesRoutes)

app.get("/", (req, res) => {
    res.send("API is working");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

