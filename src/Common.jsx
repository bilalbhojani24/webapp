import React from 'react';
import banner from './Image/banner.jpg';
import {NavLink} from 'react-router-dom'

function Common(props) {
    return (
        <>
            <div className="container-fluid py-5 my-5">
              <div className="row justify-content-between align-items-center">
                  <div className="col-12 col-md-10 mx-auto banner_content">
                      <div className="row justify-content-between align-items-center">
                          <div className="col-12 col-md-6 order-2 order-md-1">
                              <h1> <span className="heading_span">The Young Developer</span> Team</h1>
                              <h4>{props.sub}</h4>
                              <NavLink to={props.visit} className="button">{props.btnname}</NavLink>
                          </div>
                          <div className="col-12 col-md-6 order-1 order-md-2">
                              <img src={banner} alt="banner" className="img-responsive animated" width="100%" />
                          </div>
                      </div>
                  </div>
              </div>
            </div>  
        </>
    )
}

export default Common
