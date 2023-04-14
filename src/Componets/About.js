import React from "react";
import icon from "../Assets/Dog.svg";

function About() {
  return (
    <div className="row">
        <div className="col-5">
        <img src={icon} alt="" style={{ width: "100%" }} />

        </div>
        <div className="col-7">
        <h1>About Us</h1>
      <p>
        <b>
          We are a community which helps to mak the process esy for adopting a
          dog.as you alredy know dogs are most loyal animal on the earth.Owning
          a dog or puppy is a big responsibility, yet someone who has little
          time to exercise their pet or is away from home for long periods,
          often buys a breed which is very demanding, which leads to a poor
          relationship between them and their dog. There are numerous breeds of
          dog in the world so the choice of
        </b>
      </p>
        </div>
      
    </div>
  );
}

export default About;
