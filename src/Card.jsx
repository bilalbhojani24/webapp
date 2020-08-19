import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} alt="cardpic" className="card-img-top" style={{height:"250px"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, asperiores.
            </p>
            <NavLink to="" className="btn btn-primary">
              Get Service
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
