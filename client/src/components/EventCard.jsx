function EventCard({
  image,
  title,
  description,
  date,
  time,
  location,
  category,
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-6">

        <div className="flex items-center justify-between">
          <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {category}
          </span>

          <span className="hidden text-sm text-slate-500 sm:block">
            Event
          </span>
        </div>

        <h2 className="mt-4 text-xl font-bold text-slate-900 md:text-2xl">
          {title}
        </h2>

        <p className="mt-3 text-base leading-6 text-slate-600">
          {description}
        </p>

        <div className="mt-5 space-y-2 text-sm text-slate-600">
          <p>📅 <span className="font-medium">{date}</span></p>
          <p>⏰ <span className="font-medium">{time}</span></p>
          <p>📍 <span className="font-medium">{location}</span></p>
        </div>

        <button className="mt-auto w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 md:w-auto">
          Register
        </button>

      </div>
    </div>
  );
}

export default EventCard;