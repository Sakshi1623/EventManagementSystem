import EventCard from "../components/EventCard";

function Home() {
    const events = [
        {
            id: 1,
            title: "Tech Fest 2026",
            description: "A technology event for students.",
            date: "15 September 2026",
            location: "Mumbai",
        },
        {
            id: 2,
            title: "React Workshop",
            description: "Learn React from basics to advanced.",
            date: "20 September 2026",
            location: "Pune",
        },
        {
            id: 3,
            title: "AI Conference",
            description: "Explore the latest AI technologies.",
            date: "25 September 2026",
            location: "Bengaluru",
        },
    ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-100 px-6 py-20 text-center">
       <h1 className="text-2xl md:text-6xl font-bold text-red-500">
            Welcome to EventHub
        </h1>
        <p>
            Discover and register for exciting events.
        </p>
      </section>

      {/* Events Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-3xl font-bold text-slate-900">
            Upcoming Events
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
                <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                />
            ))}
           </div>


        </div>
      </section>
    </div>
  );
}

export default Home;
