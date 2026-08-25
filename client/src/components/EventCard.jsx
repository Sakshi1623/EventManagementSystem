function EventCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm">

      {/* Event Image */}
      <img
        src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
        alt="Technology Conference"
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-5">

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Tech Conference 2026
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          Join us for an exciting technology conference featuring
          industry experts and innovative ideas.
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-5">

          <p className="text-gray-700">
            📅 15 September 2026
          </p>

          <p className="text-gray-700">
            📍 Mumbai
          </p>

        </div>

        {/* Button */}
        <button
          className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-lg
            font-semibold
            hover:bg-blue-800
            transition
          "
        >
          View Details
        </button>

      </div>

    </div>
  );
}

export default EventCard;