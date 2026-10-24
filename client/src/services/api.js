const API_URL = "/api/events";

// GET: Fetch all events
export async function getEvents() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
}

// GET: Fetch an event by ID
export async function getEventById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch event");
  }

  return response.json();
}

// POST: Create an event
export async function createEvent(eventData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create event");
  }

  return data;
}

// PUT: Update an event
export async function updateEvent(id, eventData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update event");
  }

  return data;
}

// DELETE: Delete an event
export async function deleteEvent(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete event");
  }

  return data;
}
