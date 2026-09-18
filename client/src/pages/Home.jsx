import EventCard from "../components/EventCard";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Hero Section */}
      <section className="px-4 py-12 text-center sm:px-6 sm:py-16 md:py-20">

        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
          Discover Amazing Events
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Find exciting events, connect with people, and register for
          experiences that interest you.
        </p>

        <button className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 sm:w-auto sm:px-6 sm:text-base">
          Explore Events
        </button>

      </section>

      {/* Events Section */}
      <section className="px-4 pb-16 sm:px-6 md:pb-20">

        <div className="mx-auto max-w-7xl">

          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Upcoming Events
          </h2>

          <p className="mt-2 text-center text-sm text-slate-500 sm:text-base">
            Explore our upcoming events and register today.
          </p>

          {/* Responsive Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <EventCard
              image="https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
              title="Music Festival 2026"
              description="Join us for an unforgettable evening filled with live music, amazing performances, food and entertainment."
              date="15 September 2026"
              time="6:00 PM - 10:00 PM"
              location="Mumbai, Maharashtra"
              category="Music"
            />

            <EventCard
              image="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
              title="Tech Conference"
              description="Explore the latest technologies, meet developers and learn from industry professionals."
              date="20 September 2026"
              time="10:00 AM - 5:00 PM"
              location="Bangalore, Karnataka"
              category="Technology"
            />

            <EventCard
              image="https://images.unsplash.com/photo-1511578314322-379afb476865"
              title="Startup Meetup"
              description="Connect with entrepreneurs, exchange ideas and build valuable professional networks."
              date="25 September 2026"
              time="4:00 PM - 8:00 PM"
              location="Pune, Maharashtra"
              category="Business"
            />

            <EventCard
              image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
              title="Cultural Fest"
              description="Celebrate music, dance, art and culture with an exciting community of people."
              date="1 October 2026"
              time="3:00 PM - 11:00 PM"
              location="Mumbai, Maharashtra"
              category="Culture"
            />

            <EventCard
              image="https://images.unsplash.com/photo-1505236858219-8359eb29e329"
              title="Photography Workshop"
              description="Learn photography techniques and improve your skills with professional photographers."
              date="10 October 2026"
              time="11:00 AM - 4:00 PM"
              location="Nashik, Maharashtra"
              category="Workshop"
            />

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;