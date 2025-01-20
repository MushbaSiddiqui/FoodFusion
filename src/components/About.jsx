import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    { year: "1995", text: "First pizzeria opened in DHA Lahore" },
    { year: "2005", text: "Expanded to 5 locations across Punjab" },
    { year: "2015", text: "Introduced wood-fired ovens & authentic recipes" },
    { year: "2023", text: "Celebrating over 1 million pizzas served" },
  ];

  const values = [
    {
      title: "Quality First",
      description: "Premium ingredients sourced locally and from Italy",
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
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Authentic Recipes",
      description: "Traditional Italian techniques passed down generations",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Customer Service",
      description: "Dedicated to providing exceptional dining experiences",
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
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "25+", text: "Years Experience" },
    { number: "5", text: "Locations" },
    { number: "50+", text: "Team Members" },
    { number: "1M+", text: "Pizzas Served" },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,33,0.08)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-secondary/5 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary text-sm uppercase tracking-wider font-medium mb-4 block">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light mb-6">
            Crafting Perfect Pizza Since{" "}
            <span className="text-secondary">1995</span>
          </h1>
          <p className="text-light-gray text-lg sm:text-xl leading-relaxed">
            From a small family pizzeria to a beloved establishment, our journey
            has been driven by passion, tradition, and the pursuit of pizza
            perfection.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-dark p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-secondary font-bold text-3xl mb-2">
                {stat.number}
              </div>
              <div className="text-light-gray text-sm">{stat.text}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-dark p-8 rounded-2xl hover:bg-dark/50 transition-all duration-300 hover:shadow-xl group border border-dark-light/10"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-secondary">{value.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-light mb-4 group-hover:text-secondary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-light-gray">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light mb-6">
              A Legacy of{" "}
              <span className="text-secondary">Italian Flavors</span>
            </h2>
            <div className="space-y-4 text-light-gray mb-8">
              <p>
                Our story began in 1995 when our founder brought authentic
                Italian pizza-making traditions to Lahore. What started as a
                small family pizzeria has grown into a beloved establishment,
                serving the community with authentic Italian flavors.
              </p>
              <p>
                Every pizza we make carries the legacy of traditional recipes,
                combined with modern culinary innovation. Our commitment to
                quality and authenticity has made us a favorite among pizza
                lovers.
              </p>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary hover:bg-secondary-light text-dark font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Explore Our Menu
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/restaurant.png"
                  alt="Our restaurant"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-dark p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-secondary font-bold text-4xl mb-1">
                  25+
                </div>
                <div className="text-light text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="text-center bg-dark p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-secondary font-bold text-2xl mb-2">
                  {milestone.year}
                </div>
                <div className="text-light-gray text-sm">{milestone.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
