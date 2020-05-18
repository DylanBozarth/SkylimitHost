// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      invisibletext: ""
    };
    

  }


  
  render() {
    const { status } = this.state;
    function itworked() {
  alert("Sky will contact you shortly!")
  var checkedboxes = document.querySelectorAll('[type="checkbox"]:checked')
  
  const values = [
    ...document.querySelectorAll('[type="checkbox"]:checked')
  ].map(el => el.value) ;
  this.setState({
    invisibletext: values
  })
  }
  
  
function didntwork() {
  alert("Error, something's not right. ")
}



    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/maypqndd"
        method="POST"
      >
      <label>Your name</label>
        <input type="text" name="My name:" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Phone number</label>
        <input type="text" name="Phone number" />
        <label>What are you fitness goals?</label>
        <input type="text" name="My fitness goals" />
        <div className="col-sm-12">
          <h3>What are you interested in? Select all that apply.</h3>
          <div className="radio ">
            <label>
              <input type="checkbox" className="checkbox" value="Coaching" />1 : 1 Coaching
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" className="checkbox" value="Triatholons" />
              Triathlon Training Plans
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" className="checkbox" value="running/trainingplans" />
              Running/Ultrarunning Training Plans
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox"  className="checkbox" value="Personaltraining" />
              Personal Training plans
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" className="checkbox" value="Nutrition" />
              Nutrition Coaching
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" className="checkbox" value="Swimming" />
              Swimming Analysis
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" className="checkbox" value="runningAnalysis" />
              Running Analysis
            </label>
          </div>
          <input className="invisible" type="text" name="I am interested in:"></input>
        </div>
        
        {status === "SUCCESS" ? <p>{itworked()}</p> : <button>Submit</button>}
        {status === "ERROR" && <p>{didntwork()}</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}




/*<div className="col-sm-12">
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
        */