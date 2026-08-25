import Navbar from "./components/Navbar";
import EventCard from "./components/EventCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <main className="py-10 px-6">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Upcoming Events
        </h1>

        <div className="flex justify-center">
          <EventCard />
        </div>

      </main>

    </div>
  );
}

export default App;