import app from "./app";

// returns details of all events without attendees info
app.get("/all-events", async (req, res) => {});

// returns details of all events without attendees info
app.get("/event/:id", async (req, res) => {});

// saves attendee info to the event (puts the rsvp info into the attendees field of the event)
app.put("/event/:id/rsvp", async (req, res) => {});
