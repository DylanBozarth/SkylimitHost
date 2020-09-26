import React from "react";



class Services extends React.Component {
  handleAddToCart = (e, serviceitems) => {
    this.props.addToCart(serviceitems);
    e.target.classList.add("btn-success");
    e.target.innerHTML = "Added to cart";
  };

  render() {
    if (this.props.propdata) {
      var serviceitems = this.props.propdata.main.serviceitems.map(
        serviceitems => {
          
          return (
            <div className="col-sm-4"  key={serviceitems.price}>
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
              <p className="">${serviceitems.price}</p>
              <a href={serviceitems.onotherwebsite} target="_blank" rel="noopener noreferrer">{serviceitems.onotherwebsite}</a>
              </div><button
                name={serviceitems.title}
                id={serviceitems.image}
                value={serviceitems.price}
                className="addtocart"
                // pass the event and serviceitems object
                onClick={e => this.handleAddToCart(e, serviceitems)}
              >
                Add to cart
              </button>
              
            </div>
          );
        }
      );
    } else return <h1>Loading...</h1>;

    return (
      <div className="container-fluid ">
        <h1 className="servicestitle">Some services I offer <br /> Hover or tap to expand</h1>
        <div className=" row servicepage">{serviceitems}</div>
      </div>
    );
  }
}

export default Services;
