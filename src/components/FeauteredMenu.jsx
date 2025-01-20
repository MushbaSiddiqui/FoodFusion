import React from "react";
import { Link } from "react-router-dom";

const FeaturedMenu = () => {
  const featuredItems = [
    {
      name: "Margherita Supreme",
      description:
        "Fresh basil, buffalo mozzarella, cherry tomatoes, olive oil",
      price: "2000 PKR",
      image: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/oqikbhnj/78badc85-57d6-481e-adea-f187e9d2dfa6.jpg",
      category: "Signature",
    },
    {
      name: "Pepperoni Feast",
      description: "Double pepperoni, mozzarella, Italian herbs, tomato sauce",
      price: "2500 PKR",
      image: "https://pizza.cafeela.pk/wp-content/uploads/2021/05/Pepperoni-Feast.jpg",
      category: "Popular",
    },
    {
      name: "Mediterranean Delight",
      description: "Olives, feta cheese, sun-dried tomatoes, spinach, oregano",
      price: "2200 PKR",
      image: "https://tarasmulticulturaltable.com/wp-content/uploads/2013/08/herbed-chicken-mediterranean-pizza-5-of-6.jpg",
      category: "Special",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,33,0.08)_0%,rgba(0,0,0,0)_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-sm uppercase tracking-wider font-medium mb-4 block">
            Featured Menu
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light mb-6">
            Our Most Popular <span className="text-secondary">Pizzas</span>
          </h2>
          <p className="text-light-gray text-lg sm:text-xl leading-relaxed">
            Discover our chef's selection of signature pizzas, crafted with
            premium ingredients and perfect flavor combinations.
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {featuredItems.map((item) => (
            <div
              key={item.name}
              className="group relative bg-dark-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary/90 text-dark px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-light group-hover:text-secondary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-secondary font-bold">{item.price}</span>
                </div>
                <p className="text-light-gray text-sm mb-6">
                  {item.description}
                </p>
                <button className="w-full py-3 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-dark font-semibold transition-all duration-300">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary hover:bg-secondary-light text-dark font-semibold transition-all duration-300 hover:shadow-lg"
          >
            View Full Menu
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
