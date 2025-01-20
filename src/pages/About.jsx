import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    { year: "1995", text: "First pizzeria opened in DHA Lahore" },
    { year: "2000", text: "Introduced authentic wood-fired ovens" },
    { year: "2005", text: "Expanded to 5 locations across Punjab" },
    { year: "2010", text: "Launched chef training program" },
    { year: "2015", text: "Introduced organic ingredients" },
    { year: "2020", text: "Modernized delivery system" },
    { year: "2023", text: "Celebrating over 1 million pizzas served" },
  ];

  const team = [
    {
      name: "Chef Antonio",
      role: "Head Chef",
      description:
        "Master pizza chef with 20+ years of experience in Italian cuisine",
      image:
        "https://chefmaison.com/_next/image/?url=https%3A%2F%2Fd3l9f26xbu27n5.cloudfront.net%2Fmedia%2FIMG_8594_-_antonio_inglese.jpeg&w=3840&q=75",
    },
    {
      name: "Sarah Ahmed",
      role: "Restaurant Manager",
      description:
        "Ensuring exceptional service and customer satisfaction since 2010",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-ABOQhRu43jNj4LRHDmYNI4pOZgTUQzg5Q&s",
    },
    {
      name: "Ali Hassan",
      role: "Quality Manager",
      description: "Maintaining the highest standards of ingredient quality",
      image:
        "https://media.istockphoto.com/id/1358031882/photo/caucasian-pizza-master-adding-the-cherry-tomato-on-pizza.jpg?s=612x612&w=0&k=20&c=_RPXpVFOXcfDXl5hgun_rPK8sMe4N-2H6_kEVDq8IeU=",
    },
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

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light mb-6">
              Our <span className="text-secondary">Journey</span>
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
              <p>
                We take pride in sourcing the finest ingredients, from locally
                grown vegetables to imported Italian cheeses. Our wood-fired
                ovens, traditional techniques, and passionate team ensure every
                pizza tells our story of dedication to quality.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <img
                src="/restaurant.png"
                alt="Our restaurant"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-dark p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-secondary font-bold text-4xl mb-1">25+</div>
              <div className="text-light text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light mb-6">
              Meet Our <span className="text-secondary">Team</span>
            </h2>
            <p className="text-light-gray text-lg">
              The passionate individuals behind your favorite pizzas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-dark rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-light mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary text-sm mb-3">{member.role}</p>
                  <p className="text-light-gray text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light mb-6">
              Our <span className="text-secondary">Timeline</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-dark p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-secondary font-bold text-2xl mb-2">
                  {milestone.year}
                </div>
                <div className="text-light-gray text-sm">{milestone.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary hover:bg-secondary-light text-dark font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Explore Our Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
