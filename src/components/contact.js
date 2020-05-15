import React from "react";

import {useForm}  from "react-hook-form";

export default function Contact() {
  
    const { handleSubmit, register, errors } = useForm();
    
  
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="contactmain">
      <h1 className="contactme">Contact Me</h1>
      <form id="contact-form" method="POST" onSubmit={this.handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">
            <h3>Name</h3>
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPhone">
            <h3>Phone number</h3>
          </label>
          <input
            type="phone"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <h3>Email address</h3>
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <h3> What are your health and fitness goals?</h3>
          </label>
          <textarea className="form-control" rows="5" />
        </div>
        <div className="col-sm-12">
          <h3>What are you interested in? Select all that apply.</h3>
          <div className="radio ">
            <label>
              <input type="checkbox" value="Coaching" />1 : 1 Coaching
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" value="Triatholons" />
              Triathlon Training Plans
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" value="running/trainingplans" />
              Running/Ultrarunning Training Plans
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" value="Personaltraining" />
              Personal Training plans
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" value="Nutrition" />
              Nutrition Coaching
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" value="Swimming" />
              Swimming Analysis
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" value="runningAnalysis" />
              Running Analysis
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
