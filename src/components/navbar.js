import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

class Navbar extends Component {
  state = {
    cartAmount: null,
  };
  render() {
    return (
      <div>
        <nav className="menu">
          <input
            type="checkbox"
            href="#"
            className="menu-open"
            name="menu-open"
            id="menu-open"
          />
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="">Menu</span>
            <span className=""></span>
            <span className=""></span>
          </label>

          <NavLink to="/" className="menu-item">
            {" "}
            <i className="fa fa-home">
              <br />
              Home
            </i>
          </NavLink>
          <NavLink to="/Services" className="menu-item">
            {" "}
            <i className="fa fa-address-card ">
              <br />
              Services
            </i>{" "}
          </NavLink>
          <NavLink to="/Blog" className="menu-item">
            {" "}
            <i className=" fa fa-newspaper-o ">
              <br /> Blog
            </i>
          </NavLink>
          <NavLink to="/Cart" className="menu-item">
            {this.props.cart.length}
            <FaShoppingCart />
          </NavLink>
          <NavLink to="/Contact" className="menu-item">
            Contact{" "}
          </NavLink>
        </nav>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="shadowed-goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
              <feColorMatrix
                in="shadow"
                mode="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
                result="shadow"
              />
              <feOffset in="shadow" dx="1" dy="1" result="shadow" />
              <feComposite in2="shadow" in="goo" result="goo" />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}

export default Navbar;
