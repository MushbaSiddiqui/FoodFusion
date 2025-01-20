import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("pizza");

  const categories = [
    { id: "pizza", name: "Pizzas" },
    { id: "appetizers", name: "Appetizers" },
    { id: "salads", name: "Salads" },
    { id: "drinks", name: "Beverages" },
    { id: "desserts", name: "Desserts" },
  ];

  const menuItems = {
    pizza: [
      {
        id: 1,
        name: "Margherita Supreme",
        price: "2000 PKR",
        description:
          "Fresh basil, buffalo mozzarella, cherry tomatoes, olive oil",
        image:
          "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/oqikbhnj/78badc85-57d6-481e-adea-f187e9d2dfa6.jpg",
        tags: ["Vegetarian", "Popular"],
      },
      {
        id: 2,
        name: "Pepperoni Feast",
        price: "2500 PKR",
        description:
          "Double pepperoni, mozzarella, Italian herbs, tomato sauce",
        image:
          "https://pizza.cafeela.pk/wp-content/uploads/2021/05/Pepperoni-Feast.jpg",
        tags: ["Spicy", "Popular"],
      },
      {
        id: 3,
        name: "Mediterranean Delight",
        price: "2200 PKR",
        description:
          "Olives, feta cheese, sun-dried tomatoes, spinach, oregano",
        image:
          "https://tarasmulticulturaltable.com/wp-content/uploads/2013/08/herbed-chicken-mediterranean-pizza-5-of-6.jpg",
        tags: ["Vegetarian"],
      },
      {
        id: 4,
        name: "BBQ Chicken Supreme",
        price: "2700 PKR",
        description:
          "Grilled chicken, BBQ sauce, red onions, bell peppers, mozzarella",
        image: "/bbq.png",
        tags: ["Popular", "Spicy"],
      },
      {
        id: 5,
        name: "Four Cheese Special",
        price: "2800 PKR",
        description: "Mozzarella, gorgonzola, parmesan, ricotta, fresh herbs",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKe64dGQqXuzACczrUWWQDk1YIgCsFvjiMDg&s",
        tags: ["Vegetarian", "Premium"],
      },
      {
        id: 6,
        name: "Meat Lovers",
        price: "3000 PKR",
        description:
          "Pepperoni, Italian sausage, beef meatballs, bacon, mozzarella",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXn3mUZTeEcTXUDiEtvrWdvXWd1l-IwSOK-g&s",
        tags: ["Popular", "Spicy"],
      },
      {
        id: 7,
        name: "Mushroom Truffle",
        price: "2900 PKR",
        description:
          "Mixed mushrooms, truffle oil, mozzarella, fresh thyme, garlic",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrTlnGBnpxcosRrNgNXUk2T4wtCXueG22Bw&s",
        tags: ["Vegetarian", "Premium"],
      },
      {
        id: 8,
        name: "Hawaiian Paradise",
        price: "2400 PKR",
        description:
          "Ham, pineapple, mozzarella, tomato sauce, extra virgin olive oil",
        image:
          "https://www.kingarthurbaking.com/sites/default/files/2020-03/hawaiian-pizza.jpg",
        tags: ["Sweet & Savory"],
      },
      {
        id: 9,
        name: "Spicy Buffalo Chicken",
        price: "2600 PKR",
        description:
          "Buffalo chicken, blue cheese, mozzarella, ranch drizzle, celery",
        image:
          "https://sugarspunrun.com/wp-content/uploads/2024/04/buffalo-chicken-pizza-1-of-1.jpg",
        tags: ["Spicy", "Popular"],
      },
    ],
    appetizers: [
      {
        id: 1,
        name: "Garlic Bread Supreme",
        price: "600 PKR",
        description:
          "Freshly baked bread with garlic butter, herbs, and melted mozzarella",
        image: "https://i.ytimg.com/vi/6jPIweFmRjw/maxresdefault.jpg",
        tags: ["Popular", "Vegetarian"],
      },
      {
        id: 2,
        name: "Mozzarella Sticks",
        price: "800 PKR",
        description: "Crispy breaded mozzarella served with marinara sauce",
        image:
          "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_700,h_467/https://thefoodcafe.com/wp-content/uploads/2018/04/Mozzarella-Sticks-5-700x467.jpg",
        tags: ["Vegetarian"],
      },
      {
        id: 3,
        name: "Bruschetta Platter",
        price: "700 PKR",
        description:
          "Toasted bread topped with tomatoes, basil, garlic, and olive oil",
        image:
          "https://windycitydinnerfairy.com/wp-content/uploads/2021/09/bruschettaboard-feature--e1632015921443-940x679.jpeg",
        tags: ["Vegetarian", "Fresh"],
      },
      {
        id: 4,
        name: "Spinach & Artichoke Dip",
        price: "900 PKR",
        description:
          "Creamy spinach and artichoke dip served with toasted bread",
        image:
          "https://www.thespruceeats.com/thmb/IzI21XI-Gg07LQnFEu57xYVnA7w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spinach-and-artichoke-dip-4157518-07-8685813570f34ac89c090084c042266d.jpg",
        tags: ["Hot", "Vegetarian"],
      },
      {
        id: 5,
        name: "Chicken Wings",
        price: "1200 PKR",
        description: "Choose from Buffalo, BBQ, or Garlic Parmesan (8 pieces)",
        image: "https://i.ytimg.com/vi/e0hLDl_ZtLw/maxresdefault.jpg",
        tags: ["Popular", "Spicy"],
      },
      {
        id: 6,
        name: "Calamari Fritti",
        price: "1100 PKR",
        description:
          "Crispy fried calamari served with marinara and lemon aioli",
        image:
          "https://www.marcellinaincucina.com/wp-content/uploads/2023/06/calamari-fritti-overhead.jpg",
        tags: ["Premium"],
      },
      {
        id: 7,
        name: "Antipasto Platter",
        price: "1500 PKR",
        description:
          "Selection of Italian meats, cheeses, olives, and marinated vegetables",
        image:
          "https://www.marthastewart.com/thmb/4X4bEVmelQmvpGpf0GknLB6Wa-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-312437-antipasto-hero-horiz-0923-ff229bc60f3647c6956ec6b203edfa9e.jpg",
        tags: ["Premium", "Popular"],
      },
      {
        id: 8,
        name: "Stuffed Mushrooms",
        price: "900 PKR",
        description:
          "Mushroom caps filled with herbs, garlic, and cheese blend",
        image:
          "https://www.simplyrecipes.com/thmb/a06O_Mb3cS_WxlCl2gFTHoPqVSU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__12__Classic-Stuffed-Mushrooms-LEAD-1-197f2867803145218fd053df593575f0.jpg",
        tags: ["Vegetarian"],
      },
      {
        id: 9,
        name: "Arancini Balls",
        price: "850 PKR",
        description:
          "Crispy risotto balls stuffed with mozzarella and marinara",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11CxxFqOWenbHfC04KGT8mPQrx22wkpUDAw&s",
        tags: ["Vegetarian", "Premium"],
      },
    ],
    salads: [
      {
        id: 1,
        name: "Classic Caesar",
        price: "800 PKR",
        description:
          "Crisp romaine, parmesan, garlic croutons, house-made Caesar dressing",
        image:
          "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg",
        tags: ["Popular", "Classic"],
      },
      {
        id: 2,
        name: "Mediterranean Greek",
        price: "900 PKR",
        description:
          "Mixed greens, feta, olives, cucumbers, tomatoes, red onion, oregano vinaigrette",
        image:
          "https://sprinkledwithbalance.com/wp-content/uploads/2023/06/mediterranean-cucumber-salad-14.jpg",
        tags: ["Fresh", "Vegetarian"],
      },
      {
        id: 3,
        name: "Caprese",
        price: "850 PKR",
        description:
          "Fresh mozzarella, tomatoes, basil, balsamic glaze, extra virgin olive oil",
        image:
          "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
        tags: ["Fresh", "Vegetarian"],
      },
      {
        id: 4,
        name: "Grilled Chicken",
        price: "1100 PKR",
        description:
          "Grilled chicken breast, mixed greens, avocado, cherry tomatoes, honey mustard",
        image:
          "https://www.eatwell101.com/wp-content/uploads/2019/04/Blackened-Chicken-and-Avocado-Salad-recipe-1.jpg",
        tags: ["Protein", "Popular"],
      },
      {
        id: 5,
        name: "Italian Chopped",
        price: "950 PKR",
        description:
          "Chopped lettuce, salami, mozzarella, chickpeas, pepperoncini, Italian dressing",
        image:
          "https://thecozyapron.com/wp-content/uploads/2012/04/chopped-salad_04_29_12_2_ca.jpg",
        tags: ["Premium"],
      },
      {
        id: 6,
        name: "Quinoa & Roasted Veggie",
        price: "1000 PKR",
        description:
          "Quinoa, roasted vegetables, baby spinach, pine nuts, lemon vinaigrette",
        image:
          "https://cookieandkate.com/images/2017/08/best-quinoa-salad-recipe-3.jpg",
        tags: ["Healthy", "Vegetarian"],
      },
      {
        id: 7,
        name: "Arugula & Pear",
        price: "950 PKR",
        description:
          "Fresh arugula, pears, walnuts, gorgonzola, balsamic dressing",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVThrKKU2P37yTk6-H0aoMGayGQuCOHCrKw&s",
        tags: ["Fresh", "Premium"],
      },
      {
        id: 8,
        name: "Tuscan Kale",
        price: "900 PKR",
        description:
          "Tuscan kale, parmesan, pine nuts, raisins, lemon-garlic dressing",
        image:
          "https://debraklein.com/wp-content/uploads/2022/01/Tuscan-Kale-Salad-11.jpg",
        tags: ["Healthy", "Vegetarian"],
      },
      {
        id: 9,
        name: "Seafood",
        price: "1300 PKR",
        description:
          "Mixed seafood, arugula, fennel, orange segments, citrus dressing",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIZyPmQRLds7Gk7utHmV5neJnMKulhKshqA&s",
        tags: ["Premium", "Fresh"],
      },
    ],
    drinks: [
      {
        id: 1,
        name: "Italian Soda",
        price: "350 PKR",
        description: "Choose from various flavors with optional cream topping",
        image:
          "https://cdn.tasteatlas.com/images/ingredients/8ef1221711ea4604a36cfc83b95365e8.jpg?w=600",
        tags: ["Cold", "Popular"],
      },
      {
        id: 2,
        name: "Espresso",
        price: "250 PKR",
        description: "Traditional Italian espresso, rich and aromatic",
        image:
          "https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-a-macchiato-003-735x919.jpg",
        tags: ["Hot", "Classic"],
      },
      {
        id: 3,
        name: "Cappuccino",
        price: "400 PKR",
        description: "Espresso with steamed milk and silky foam",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOddCC4N6kwvba2pAqfdt-FKpHszcGTiR8A&s",
        tags: ["Hot", "Popular"],
      },
      {
        id: 4,
        name: "Fresh Lemonade",
        price: "300 PKR",
        description: "Freshly squeezed lemons with mint and honey",
        image:
          "https://media.istockphoto.com/id/1401150816/photo/two-glasses-of-lemonade-with-mint-and-lemons.jpg?s=612x612&w=0&k=20&c=LuuInHwGO11q3aBbAmyMy4JvZ3njV4R0IRE10klTLew=",
        tags: ["Cold", "Fresh"],
      },
      {
        id: 5,
        name: "Affogato",
        price: "450 PKR",
        description: "Vanilla gelato drowned in hot espresso",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNoAlZ7DhDnM-iVgeFiq6t_-O-B06E4v86A&s",
        tags: ["Premium", "Special"],
      },
      {
        id: 6,
        name: "Iced Latte",
        price: "420 PKR",
        description: "Chilled espresso with milk over ice",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcCHB8apjCsubp_3JSh6sQ6-Sc3EG5L5BmQ&s",
        tags: ["Cold", "Popular"],
      },
      {
        id: 7,
        name: "San Pellegrino",
        price: "300 PKR",
        description: "Premium Italian sparkling mineral water",
        image:
          "https://www.sanpellegrino.com/sites/g/files/xknfdk1986/files/styles/open_graph_image/public/2022-10/mb-ibu-thumb-all-isd-ranges-landing.jpg?itok=2v3jfNSi",
        tags: ["Premium"],
      },
      {
        id: 8,
        name: "Fresh Orange Juice",
        price: "350 PKR",
        description: "Freshly squeezed oranges, no added sugar",
        image:
          "https://static.toiimg.com/thumb/msid-68562297,width-1280,height-720,resizemode-4/68562297.jpg",
        tags: ["Fresh", "Healthy"],
      },
      {
        id: 9,
        name: "Hot Chocolate",
        price: "380 PKR",
        description: "Rich chocolate with steamed milk and whipped cream",
        image:
          "https://www.cocoterra.com/wp-content/uploads/belgian-hot-chocolate-recipe-drink.jpg",
        tags: ["Hot", "Sweet"],
      },
      {
        id: 10,
        name: "Mocktail Special",
        price: "450 PKR",
        description: "Chef's special non-alcoholic mixed drink",
        image:
          "https://www.spoton.com/blog/content/images/size/w1200/2023/08/Mocktail--zero-proof-cocktails--and-different-non-alcoholic-drinks-1.jpeg",
        tags: ["Premium", "Special"],
      },
    ],
    desserts: [
      {
        id: 1,
        name: "Classic Tiramisu",
        price: "700 PKR",
        description:
          "Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
        image:
          "https://www.giallozafferano.com/images/228-22832/Tiramisu_650x433_wm.jpg",
        tags: ["Popular", "Classic"],
      },
      {
        id: 2,
        name: "Chocolate Lava Cake",
        price: "650 PKR",
        description:
          "Warm chocolate cake with molten center, served with vanilla gelato",
        image:
          "https://www.allrecipes.com/thmb/J0D_WQYOGJs3PpuDqqconBr0efI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7272577-67dd531d7b4a48dbb254dcdaafa658d4.jpg",
        tags: ["Hot", "Popular"],
      },
      {
        id: 3,
        name: "Cannoli Siciliani",
        price: "550 PKR",
        description:
          "Crispy pastry tubes filled with sweet ricotta cream and pistachios",
        image:
          "https://images.squarespace-cdn.com/content/v1/5e4a5d2f4e209873477bec60/1586020499555-5MUE7ML92Q4ESU2YRTOI/01.jpg",
        tags: ["Classic", "Italian"],
      },
      {
        id: 4,
        name: "Panna Cotta",
        price: "600 PKR",
        description: "Silky vanilla cream dessert with berry compote",
        image:
          "https://www.allrecipes.com/thmb/NlP50cO2BjJdN4uGvl5JhW0Rx2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-72567-Panna-cotta-ddmfs-4x3-14ae724a2a8e4ca3a79c5e27b2b61994.jpg",
        tags: ["Classic", "Light"],
      },
      {
        id: 5,
        name: "Nutella Pizza",
        price: "900 PKR",
        description:
          "Sweet pizza with Nutella, fresh strawberries, and powdered sugar",
        image:
          "https://i.pinimg.com/736x/09/59/4d/09594d12d3e140658ca4d90187f6f39b.jpg",
        tags: ["Special", "Popular"],
      },
      {
        id: 6,
        name: "Gelato Selection",
        price: "450 PKR",
        description:
          "Choice of three scoops: vanilla, chocolate, pistachio, or strawberry",
        image:
          "https://images.squarespace-cdn.com/content/v1/57e40590b3db2b13a82dabcf/1548536155928-Q0OE34S7BI5G8KC9ZDQJ/Piece-of-Velvet-ice-cream-selection.jpg?format=1500w",
        tags: ["Classic", "Cold"],
      },
      {
        id: 7,
        name: "Zeppole",
        price: "500 PKR",
        description:
          "Italian doughnuts dusted with powdered sugar, served with chocolate sauce",
        image:
          "https://www.giallozafferano.com/images/229-22940/Zeppole-di-San-Giuseppe_650x433_wm.jpg",
        tags: ["Hot", "Italian"],
      },
      {
        id: 8,
        name: "Affogato Dessert",
        price: "550 PKR",
        description:
          "Vanilla gelato 'drowned' in hot espresso with chocolate shavings",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQJ1PbSkidpfgLZZSvIDEf2WQkiPAoY58-A&s",
        tags: ["Special", "Hot"],
      },
      {
        id: 9,
        name: "Sicilian Cassata",
        price: "750 PKR",
        description:
          "Traditional sponge cake with ricotta, candied fruit, and marzipan",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGdiPFoWJuNUcfmwDwDrfHVL1auSbYqmTHA&s",
        tags: ["Premium", "Special"],
      },
      {
        id: 10,
        name: "Profiteroles",
        price: "650 PKR",
        description:
          "Choux pastry puffs filled with cream and drizzled with chocolate",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT809qsCvgyD_bZpAxSE5UYhwrA_1OpiNFjvg&s",
        tags: ["Classic", "Premium"],
      },
    ],
  };

  const getTagColor = (tag) => {
    switch (tag.toLowerCase()) {
      case "vegetarian":
        return "bg-primary/90 text-dark";
      case "spicy":
        return "bg-red-500/90 text-light";
      case "popular":
        return "bg-secondary/90 text-dark";
      default:
        return "bg-dark-light/90 text-light";
    }
  };

  return (
    <section className="py-16 md:py-24 bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,33,0.08)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-secondary/5 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Menu Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-sm uppercase tracking-wider font-medium mb-4 block">
            Our Menu
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light mb-6">
            Explore Our <span className="text-secondary">Menu</span>
          </h1>
          <p className="text-light-gray text-lg sm:text-xl leading-relaxed">
            From traditional favorites to innovative specialties, discover our
            selection of handcrafted dishes made with the finest ingredients.
          </p>
        </div>

        {/* Category Navigation - Scrollable on mobile */}
        <div className="overflow-x-auto pb-4 mb-12 -mx-4 px-4 scrollbar-hide">
          <div className="flex justify-start md:justify-center gap-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-secondary text-dark shadow-lg scale-105"
                    : "bg-dark text-light-gray hover:bg-dark-light"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid with better spacing and animations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {menuItems[activeCategory]?.map((item) => (
            <div
              key={item.id}
              className="group relative bg-dark rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-dark-light/10 hover:border-secondary/20"
            >
              {/* Image Container with better aspect ratio */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tags with improved visibility */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full shadow-lg backdrop-blur-sm ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content with improved spacing */}
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-light group-hover:text-secondary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-secondary font-bold text-lg whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-light-gray text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link to="/cards" state={{ item }}>
                  <button className="w-full py-3.5 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-dark font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                    <span className="flex items-center justify-center">
                      Add to Order
                      <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State with better styling */}
        {menuItems[activeCategory]?.length === 0 && (
          <div className="text-center py-12 px-4">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-light mb-2">
                No items available
              </h3>
              <p className="text-light-gray">
                We're currently updating this category. Please check back later
                or try another category.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
