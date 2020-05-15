import React, { Component } from "react";
import "./App.scss";
import Home from "./components/home";
import Contact from "./components/contact";
import Blog from "./components/blog";
import Services from "./components/services";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { Route, BrowserRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


class App extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      propdata: null,
      cartAmount: 0,
      cart: [],
      total: 0
    };
  }

  // the item id and price
  Removefromcart = (id, price) => {
    // using an updater function
    this.setState(state => ({
      // keep everything except the item with the id that was passed in
      cart: this.state.cart.filter(item => item.id !== id),
      // item price - current state total
      total: state.total - price
    }));
  };

  // serviceitems object, destructuring out the properties
  addToCart({ title, description, fulldescription, price, image }) {
    // using an updater function
    this.setState(state => ({
      cart: [
        ...this.state.cart,
        {
          title,
          description,
          fulldescription,
          price,
          image,
          id: uuidv4()
        }
      ],
      // item price + current state total
      total: state.total + price
    }));
    

  }

  componentDidMount() {
    fetch("/addnewitems.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          ...this,
          propdata: res
        });
      });
      
  }
  
  render() {
    console.log("Total", this.state.total);
    return (
      <BrowserRouter>
        <div className="App">
          <div className="fixedview">
            <Header />
            <Navbar cart={this.state.cart} />
          </div>
          <div className="viewthatchanges">
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} propdata={this.state.propdata} />
              )}
            />

            <Route
              path="/Services"
              render={props => (
                <Services
                  {...props}
                  propdata={this.state.propdata}
                  cart={this.state.cart}
                  cartAmount={this.state.cartAmount}
                  addToCart={this.addToCart}
                />
              )}
            />
            <Route
              path="/Blog"
              render={props => (
                <Blog {...props} propdata={this.state.propdata} />
              )}
            />
            <Route path="/contact"  handleSubmit={this.handleSubmit} register={this.register} errors={this.errors} onSubmit={this.onSubmit} component={Contact} />
            <Route
              path="/Cart"
              render={props => (
                <Cart
                  {...props}
                  propdata={this.state.propdata}
                  cart={this.state.cart}
                  cartAmount={this.state.cartAmount}
                  total={this.state.total}
                  Removefromcart={this.Removefromcart}
                />
              )}
            />
            <Route
              path="/Checkout"
              render={props => (
                <Checkout
                  {...props}
                  propdata={this.state.propdata}
                  cart={this.state.cart}
                  cartAmount={this.state.cartAmount}
                  total={this.state.total}
                />
              )}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

