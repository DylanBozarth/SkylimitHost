// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.
import cogoToast from "cogo-toast";
import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      invisibletext: "",
    };
  }

  render() {
    const { status } = this.state;
    function itworked() {
      cogoToast.success(
        "Thank you for reaching out! Coach Sky will be in contact with you shortly via email. Happy Training!"
      );
    }

    function didntwork() {
      cogoToast.error("Error, please try again. ");
    }

    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/maypqndd"
        method="POST"
        className="contactform"
      >
        <h1 className="contactsky">Contact sky</h1>

        <div className="SMlinks">
          Contact me on social media <br />
          <a
            href="https://www.facebook.com/skylimfitness/"
            target="_blank "
            rel="noopener noreferrer"
            className="smicon"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/sky_limit_fitness/
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <label>Your name</label>
        <input type="text" name="My name:" />
        <br />
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Phone number</label>
        <input type="text" name="Phone number" />
        <br />
        <label>What are you fitness goals?</label>
        <textarea type="text" name="My fitness goals" />

        <div className="checkboxes">
          <h3>What are you interested in? Select all that apply.</h3>
          <div className="leftboxes">
          <div className="radio ">
            <label>
              <input type="checkbox" className="checkbox" name="Coaching" />1 :
              1 Coaching
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" className="checkbox" name="Triatholons" />
              Triathlon Training Plans
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                name="running/trainingplans"
              />
              Running/Ultrarunning Training Plans
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                name="Personal Training plans"
              />
              Personal Training plans
            </label>
          </div>
          </div>
          <div className="rightboxes">
          <div className="radio">
            <label>
              <input type="checkbox" className="checkbox" name="Nutrition" />
              Nutrition Coaching
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="checkbox" className="checkbox" name="Swimming" />
              Swimming Analysis
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                name="runningAnalysis"
              />
              Running Analysis
            </label>
          </div>
        </div>
</div>
        {status === "SUCCESS" ? (
          <p>{itworked()}</p>
        ) : (
          <button className="submitbutton">Submit</button>
        )}
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
