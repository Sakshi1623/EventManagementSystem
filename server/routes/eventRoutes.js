const express = require("express");
const router = express.Router();

const {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

// GET: Retrieve all events
router.get("/", getEvents);

// GET: Retrieve one event by ID
router.get("/:id", getEventById);

// POST: Create a new event
router.post("/", createEvent);

// PUT: Update an existing event
router.put("/:id", updateEvent);

// DELETE: Remove an event
router.delete("/:id", deleteEvent);

module.exports = router;
