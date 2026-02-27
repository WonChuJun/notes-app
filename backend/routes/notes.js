const express = require("express");
const router = express.Router();
const db = require("../db");

// create new note
router.post("/", (req, res) => {
    const {title, content} = req.body;

    const sql = "INSERT INTO notes (title, content) VALUES (?,?)";

    db.run(sql, [title, content], function(err) {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json({
            id: this.lastID,
            title,
            content
        });
    });
});

// get all notes
router.get("/", (req, res) => {
    const sql = "SELECT * FROM notes ORDER BY created_at DESC";

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(rows, null, 2));
    });
});

// get one single note
router.get("/:id", (req, res) => {
    const sql = "SELECT * FROM notes WHERE id = ?";

    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json(row);
    });
});

// update note
router.put("/:id", (req, res) => {
    const {title, content} = req.body;

    const sql = "UPDATE notes SET title = ?, content = ? WHERE id = ?";

    db.run(sql, [title, content, req.params.id], function(err) {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json({message: "Note updated"});
    });
});

// delete note
router.delete("/:id", (req, res) => {
    const sql = "DELETE FROM notes WHERE id = ?";
    
    db.run(sql, [req.params.id], function(err) {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json({message: "Note deleted"});
    });
});

module.exports = router;