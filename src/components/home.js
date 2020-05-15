import React, { Component } from "react";
import Imageshowoff from "./subcomponents/imageshowoff";
import Testimonials from "./subcomponents/testimonials";
import { NavLink } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3 className="hometagline">
          {" "}
          SkyLimit Fitness will keep you accountable for your goals and help you
          maintain focus and balance. Let us help you unlock your potential and
          find your happiest, healthiest self.{" "}
        </h3>
        <Imageshowoff className="homeslider" />
        <div className="homeinfo">
          <h3 className="homesubtitle">What sets Skylimit Fitness apart? </h3>
          <div className="hometext">
            SkyLimit Fitness doesn’t just create training plans! <br /> We
            emphasize whole-body health by looking at the three building blocks
            of your wellness:
            <ul>
              {" "}
              <li>fitness</li> <li>nutrition</li> <li>mental health.</li>{" "}
            </ul>{" "}
            With training plans and nutrition coaching all in one place, we help
            you forge a lifestyle geared toward a healthy balance between your
            fitness, health and wellness goals. With communication sessions
            dedicated to your short-term goals and progress.
          </div>
        </div>
        <div className="homebio"></div>
        <div className="meet">
          <h2 className="meettitle">Meet Coach Sky</h2>
          <img
            className="skybiophoto"
            alt="sky"
            src={require("./images/coachskybio.png")}
          ></img>
          <p className="skybio">
            {" "}
            Hi, I’m Coach Sky! I’m a Triathlon and Run Coach based out of
            Spokane, WA/Coeur D’Alene, ID and coach virtually across the world.
            I am an Ironman Certified Coach, NASM Certified Personal Trainer,
            Certified Nutrition Coach with a Weight Loss Specialization. I am a
            lifelong swimmer with a love for adventurous racing. My race history
            is diverse, ranging from ITU World Championships and Team USA, 50
            mile ultras, Ragnar Ultras and long distance open water swims. I
            enjoy the challenge of trying new distances and terrains, always
            learning and growing in the joy of racing. When I’m not coaching or
            training myself, you’ll find me dreaming up cycling inventions and
            trying to turn my fluffy, loopy doodles into dignified runners.
          </p>
        </div>

        <div className="homebio">
          <h1 className="hometitle">Sky's teaching philosphy</h1>
          <p className="hometext">
            {" "}
            SkyLimit Fitness is dedicated to helping athletes crush their goals
            – whether that be crossing the finish line for the first time or
            breaking the ribbon. With an emphasis on coach-athlete
            communication, injury prevention, and performance optimization,
            Coach Sky wants to help you find your happiest, healthiest self on
            the way to your race.{" "}
          </p>
          <img
            className="skyphoto"
            alt="sky"
            src={require("./images/Sky.jpg")}
          ></img>
          <h4>Coach Sky</h4>
          <br />
        </div>

        <div className="home3">
          <h4 className="coachskywill">Coach Sky will:</h4>
          <ul className="homelist">
            <li>
              Help you look beyond your season of training and toward your
              life-long journey with fitness, and develop healthy training and
              recovery habits (say goodbye to yearly burnout and over-training
              injuries){" "}
            </li>
            <li>
              Educate you and help foster a healthier relationship with your
              body through proper nutrition grounded in science (time to ditch
              that dieting trend)
            </li>
            <li>
              Encourage a newfound focus on mental wellness and self-care so you
              can reach your greatest potential in all areas of life
            </li>
          </ul>
        </div>

        <div>
          <h1 className="testimonialtitle">Testimonials</h1>
          <div className="Testimonials">
            <Testimonials />
          </div>
          <div className="linktoservices">
            <img
              alt="fitnessguy"
              className="fitnessguy"
              src={require("./images/fitnessguy.gif")}
            ></img>{" "}
            <br /> <NavLink to="/Services"> Ready to get started? </NavLink>{" "}
            <br />
            <img
              alt="fitnessguy"
              className="fitnessguy"
              src={require("./images/fitnessguy.gif")}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
