function EventCard() {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
        alt="Music Festival"
        className="h-48 w-full object-cover sm:h-52"
      />

      {/* Content */}
      <div className="p-5 sm:p-6">

        <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
          Music Festival 2026
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
          Join us for an unforgettable evening filled with live music,
          amazing performances, food and entertainment.
        </p>

        <div className="mt-5 space-y-3 text-sm text-slate-600">

          <p>📅 15 September 2026</p>

          <p>📍 Mumbai, Maharashtra</p>

          <p>⏰ 6:00 PM - 10:00 PM</p>

        </div>

        <button className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto">
          View Event
        </button>

      </div>
    </div>
  );
}

export default EventCard;