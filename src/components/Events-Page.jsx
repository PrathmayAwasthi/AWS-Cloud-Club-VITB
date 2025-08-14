import React from "react";

const EventsPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#2A003A] to-[#111111] min-h-screen text-white font-sans flex flex-col items-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
          Join us for exciting hands-on sessions, workshops, and competitions!
        </p>
      </section>

      {/* Events Grid */}
      <section className="px-4 md:px-12 lg:px-20 py-8 w-full max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event Card */}
          <div className="bg-purple-950 border-4 border-pink-500 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <a
              href="https://forms.gle/YVecQcTp5TZhKsm3A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <img
                src="/images/qode-and-play-poster.jpg"
                alt="Qode & Play Event Poster"
                className="w-full object-cover"
              />
            </a>
            <div className="p-4 text-center">
              <h2 className="text-2xl font-bold text-pink-400">Qode & Play</h2>
              <p className="mt-2 text-sm text-gray-300">
                Your first Python game, accelerated by Amazon Q. <br />
                <strong>Speaker:</strong> Omshree Butani
                <br /> <strong>Date:</strong> August 13th, 12 P.M.
                <br /> <strong>Mode:</strong> Online Event
              </p>
              <a
                href="https://forms.gle/YVecQcTp5TZhKsm3A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
          {/* Add more event cards here */}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;