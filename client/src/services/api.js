const API_URL = "http://localhost:5000/api";

export default API_URL;

export async function getEvents() {
  const response = await fetch("/api/events");

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
}
