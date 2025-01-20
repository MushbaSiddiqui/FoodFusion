import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,33,0.15)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-secondary/5 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-secondary text-sm uppercase tracking-wider font-medium mb-4 block">
            Special Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light mb-6">
            Get <span className="text-secondary">20% Off</span> on Your First
            Order
          </h2>
          <p className="text-light-gray text-lg sm:text-xl leading-relaxed mb-8">
            Experience the authentic taste of Italy with our handcrafted pizzas.
            Order now and enjoy exclusive discounts on your first purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary hover:bg-secondary-light text-dark font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Order Now
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-dark font-semibold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-light-gray">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-secondary"
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
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Best Prices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
