import React, { Component } from "react";
import PaypalButton from "./Checkout";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: null,
      propdata: null,
      priceamount: 0,
      total: 0
    };
  }

  // use state, not the DOM content, to calculate the total
  // also this is overcomplicated

  // gettotal() {
  //   if (this.props.cart.length !== 0) {
  //     var pricevar = document.getElementsByClassName("cartprice");
  //     var i;
  //     let pricearray = [];
  //     for (i = 0; i < pricevar.length; i++) {
  //       pricearray[i] = pricevar[i].textContent;
  //     }
  //     var string = JSON.stringify(pricearray);
  //     string.replace(/"/g); //"[apple,orange,pear]"
  //     //console.log(pricearray);
  //     let numberarray = [];
  //     for (const element of pricearray) {
  //       let pricenumbers = parseInt(element, 10);
  //       numberarray.push(pricenumbers);
  //       console.log(numberarray);
  //     }
  //     const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //     let finaltotal = numberarray.reduce(reducer, 0);
  //     this.setState({
  //       total: finaltotal
  //     });
  //   }
  // }

  // componentDidMount() {
  //   this.gettotal();

  //   document.addEventListener("click", e => {
  //     if (e.target.classList.contains("xbutton")) {
  //       // Removes an element from the document
  //       e.target.parentNode.remove();

  //       this.gettotal();
  //       this.props.Removefromcart();
  //     }
  //   });
  // }

  render() {
    if (this.props.cart.length !== 0) {
      var cartitems = this.props.cart.map(cartitems => {
        return (
          <div
            className="col-sm-12  cartitem"
            key={cartitems.id}
            id={cartitems.id}
          >
            <img
              src={cartitems.image}
              alt={cartitems.name}
              className="cart-image"
            />

            <h5 className="">{cartitems.description}</h5>
            <p className="">{cartitems.fulldescription}</p>
            <div className="pricebox">
              <p className="cartprice">{cartitems.price}</p>
            </div>
            <button
              // pass the id and price
              onClick={() =>
                this.props.Removefromcart(cartitems.id, cartitems.price)
              }
              className="xbutton btn btn-danger"
            >
              Remove
            </button>
          </div>
        );
      });
    } else
      return (
        <h1 className="nocart">
          Add items to your cart and they will appear here.
        </h1>
      );

    return (
      <div className="cart-container">
        {cartitems}
        <div className="cartfooter">
          <h4 className="yourtotal">Your total: $ {this.props.total}</h4>
          <PaypalButton className="checkoutbutton" total={this.props.total} />
        </div>
      </div>
    );
  }
}

export default Cart;
