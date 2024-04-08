import app from "./app";

// gets details of all events including attendees info
app.get("admin/all-events", async (req, res) => {});

// gets details of all event including attendees info
app.get("admin/event/:id", async (req, res) => {});

// saves new event data to the events collection
app.put("admin/create-event", async (req, res) => {});

// updates the details of an existing event
app.post("admin/event/:id/update", async (req, res) => {});

// gets the jwt token upon successful admin user verification (not robust)
app.get("admin/login", async (req, res) => {});
