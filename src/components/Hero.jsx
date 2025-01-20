import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-20 sm:pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,33,0.1)_0%,rgba(0,0,0,0)_70%)]" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-4 sm:mb-6 leading-tight">
              Savor the Perfect{" "}
              <span className="text-secondary">Slice of Heaven</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-light-gray mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience artisanal pizzas crafted with passion, featuring the
              finest ingredients and traditional recipes that will transport
              your taste buds to Italy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                to="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-secondary hover:bg-secondary-light text-dark font-semibold transition-colors duration-300"
              >
                View Menu
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
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-dark font-semibold transition-colors duration-300"
              >
                Order Now
              </Link>
            </div>
          </motion.div>

          {/* Pizza Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:right-0 max-w-md sm:max-w-lg lg:max-w-xl mx-auto order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 z-0"
              >
                <div className="absolute top-1/4 -left-4 sm:-left-10 w-16 sm:w-20 h-16 sm:h-20 bg-secondary/20 rounded-full blur-xl" />
                <div className="absolute bottom-1/4 -right-4 sm:-right-10 w-24 sm:w-32 h-24 sm:h-32 bg-primary/20 rounded-full blur-xl" />
              </motion.div>

              {/* Pizza Image with Shadow */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <img
                    src="/pizza.jpg"
                    alt="Delicious pizza with melted cheese and toppings"
                    className="w-full h-auto drop-shadow-2xl rounded-2xl"
                  />
                </motion.div>

                {/* Features List */}
                <div className="absolute -bottom-4 sm:-bottom-10 left-0 right-0 flex justify-center flex-wrap gap-2 sm:gap-4 px-2 sm:px-4">
                  {["Fresh", "Authentic", "Delicious"].map((feature, index) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-dark-light/80 backdrop-blur-sm rounded-full text-xs sm:text-sm text-light shadow-lg"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-light/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-light/30 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
