import React from "react";

const Map = () => {
  return (
    <section className="py-16 md:py-24 bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,33,0.08)_0%,rgba(0,0,0,0)_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary text-sm uppercase tracking-wider font-medium mb-4 block">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light mb-6">
            Our <span className="text-secondary">Location</span>
          </h2>
          <p className="text-light-gray text-lg sm:text-xl leading-relaxed">
            Visit us in DHA Karachi for an authentic Italian pizza experience
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54484.1935619044!2d74.36612071978101!3d31.479974535557533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904bbf945862b%3A0x9d15a27c5a1d8c86!2sDHA%20Phase%206%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1679900000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Food Fusion Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="bg-dark p-6 rounded-xl">
            <div className="text-secondary mb-2">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-light font-semibold mb-2">Address</h3>
            <p className="text-light-gray text-sm">
              DHA Phase 6, Karachi, Sindh, Pakistan
            </p>
          </div>

          <div className="bg-dark p-6 rounded-xl">
            <div className="text-secondary mb-2">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-light font-semibold mb-2">Opening Hours</h3>
            <p className="text-light-gray text-sm">
              Mon - Sun: 11:00 AM - 11:00 PM
            </p>
          </div>

          <div className="bg-dark p-6 rounded-xl">
            <div className="text-secondary mb-2">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-light font-semibold mb-2">Contact</h3>
            <p className="text-light-gray text-sm">+92 321 9095151</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
