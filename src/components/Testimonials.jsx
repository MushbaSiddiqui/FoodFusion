import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amna Baloch",
      role: "Food Enthusiast",
      image: "https://i.tribune.com.pk/media/images/AmnaBaloch-likelyforeignsecretary1723051205-0/AmnaBaloch-likelyforeignsecretary1723051205-0.jpg",
      quote:
        "The best pizza I've ever had! The crust is perfectly crispy, and the ingredients are always fresh. This place has become our family's favorite weekend spot.",
      rating: 5,
    },
    {
      name: "Muhammad Asif",
      role: "Local Food Blogger",
      image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode400/39527822/39527822-1699355067890-b649f4ecd7295.jpg",
      quote:
        "Authentic Italian flavors that transport you straight to Naples. Their wood-fired pizzas are a game-changer. Highly recommend the Margherita Supreme!",
      rating: 5,
    },
    {
      name: "Iqra Khan",
      role: "Regular Customer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTELtPfguP0vUIxz_SNF2urwFxMsp3XncJg&s",
      quote:
        "Great atmosphere, friendly staff, and consistently delicious pizzas. Their commitment to quality ingredients really shows in every bite.",
      rating: 5,
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-secondary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-dark-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,33,0.08)_0%,rgba(0,0,0,0)_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-sm uppercase tracking-wider font-medium mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light mb-6">
            What Our <span className="text-secondary">Customers</span> Say
          </h2>
          <p className="text-light-gray text-lg sm:text-xl leading-relaxed">
            Don't just take our word for it - hear what our valued customers
            have to say about their dining experience with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark p-8 rounded-2xl hover:bg-dark/50 transition-all duration-300 hover:shadow-xl group border border-dark-light/10"
            >
              <div className="flex flex-col h-full">
                {/* Quote */}
                <div className="mb-8">
                  <svg
                    className="w-10 h-10 text-secondary/20 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-light-gray italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="mt-auto">
                  <StarRating rating={testimonial.rating} />
                  <div className="flex items-center mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-light font-semibold group-hover:text-secondary transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-light-gray text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center text-light-gray">
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-secondary mb-2">
                1000+
              </div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-secondary mb-2">4.9</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-secondary mb-2">25+</div>
              <div className="text-sm">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
