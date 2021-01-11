import React from "react";
import { motion } from "framer-motion";
import Testimonials from "./subcomponents/testimonials";
const changepage = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const pagetransition = {
  duration: 1.5,
};
const moveStuff = {
  in: {
    x: 0,
  },
  out: {
    x: "100vw",
  },
};
const Moving = {
  duration: 1,
};

class Services extends React.Component {
  state = [
    {
      price: 10,
      image: "./serviceimages/nutrition.png",
    },
    {
      price: 35,
      image: "./serviceimages/personaltraining.png",
    },
    {
      price: 5,
      image: "./serviceimages/swimanalysis.png",
    },
    {
      price: 175,
      image: "./serviceimages/coachingbronze.png",
      amount: 1,
    },
    {
      price: 100,
      image: "./serviceimages/coachingsilver.png",
    },
    {
      price: 195,
      image: "./serviceimages/coachinggold.png",
    },
  ];
  handleAddToCart = (e, serviceitems) => {
    this.props.addToCart(serviceitems);
    e.target.classList.add("btn-success");
    e.target.innerHTML = "Added to cart";
  };

  render() {
    if (this.state) {
      var serviceitems = this.state.map((serviceitems) => {
        return (
          <div className="col-sm-4" key={serviceitems.price}>
            <h5 className="">{serviceitems.title}</h5>
            <img
              src={serviceitems.image}
              alt={serviceitems.title}
              className="img-fluid serviceitemimg"
            />
            <div className="serviceprice">
              <p id={serviceitems.description} className=" ">
                {serviceitems.description}
              </p>
              <p className="price">${serviceitems.price}</p>
              <a
                href={serviceitems.onotherwebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {serviceitems.onotherwebsite}
              </a>
            </div>
            <button
              name={serviceitems.title}
              id={serviceitems.image}
              value={serviceitems.price}
              className="addtocart"
              // pass the event and serviceitems object
              onClick={(e) => this.handleAddToCart(e, serviceitems)}
            >
              Add to cart
            </button>
          </div>
        );
      });
    } else return <h1>Loading...</h1>;

    return (
      <motion.div
        className="container-fluid"
        initial="out"
        animate="in"
        exit="out"
        variants={changepage}
        transition={pagetransition}
      >
        <h1 className="servicestitle">Some services I offer </h1>
        <motion.div initial="out"
        animate="in"
        exit="out"
        variants={moveStuff}
        transition={Moving} className="row servicepage">{serviceitems}</motion.div>
        <h1 className="testimonialtitle">Testimonials</h1>
        <div className="Testimonials">
          <Testimonials />
        </div>
      </motion.div>
    );
  }
}

export default Services;
