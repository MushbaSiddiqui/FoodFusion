import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      title: "Visit Us",
      info: "DHA Phase 6, Karachi, Sindh, Pakistan",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
    {
      title: "Call Us",
      info: "+92 123 456 7890",
      link: "tel:+921234567890",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
    {
      title: "Email Us",
      info: "info@foodfusion.com",
      link: "mailto:info@foodfusion.com",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24 bg-dark-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,33,0.08)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-secondary/5 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-sm uppercase tracking-wider font-medium mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light mb-6">
            Contact <span className="text-secondary">Us</span>
          </h1>
          <p className="text-light-gray text-lg sm:text-xl leading-relaxed">
            Have questions or feedback? We'd love to hear from you. Contact us
            using any of the methods below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-dark p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-light mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-light-gray text-sm mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-light rounded-xl border border-dark-light/10 text-light focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-light-gray text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-light rounded-xl border border-dark-light/10 text-light focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-light-gray text-sm mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-light rounded-xl border border-dark-light/10 text-light focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors duration-300"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-light-gray text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-dark-light rounded-xl border border-dark-light/10 text-light focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-secondary hover:bg-secondary-light text-dark font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-dark p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-light mb-2">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-light-gray hover:text-secondary transition-colors duration-300"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-light-gray">{item.info}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="bg-dark p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-light mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2 text-light-gray">
                <p>Monday - Friday: 11:00 AM - 11:00 PM</p>
                <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-dark p-2 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54484.1935619044!2d74.36612071978101!3d31.479974535557533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904bbf945862b%3A0x9d15a27c5a1d8c86!2sDHA%20Phase%206%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1679900000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
