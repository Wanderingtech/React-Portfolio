import React from 'react';
import './index.css';
function AboutMe(){
    return(
        <div className="container">
        <div className="row">
          <div className="w-75 mx-auto">
            <div className="card">
              <img src="/public/assets/bioprofile.jpg" className="card-image-top-fluid" alt="Picture of Heather"></img>
              <div className="card-body" id="aboutMe">
                <h5 className="card-title">About Me!</h5>
                <p className="card-text">I've worked in surgery for 13 years. This is the year I broke out,
                  learned something entirely new, and found a new passion. I have a deep rooted love of learning.
                  My determination in persuit of learning can be obsessive.
                  <br></br>
                  <br></br>
                  I took on a coding bootcamp that changed my whole outlook on learning styles, and pushed
                  me to rely on myself and peers rather than soley concrete study materials.
                  This helped me prepare for the real world from day one.
                  <br></br>
                  <br></br>
                  My experience in surgery built me into a team player. The importance of everyone
                  being on the same page and being able to contribute their ideas and concerns is very
                  important to me.
                </p>
                <p className="card-text"><small className="text-muted">Last updated 6/27/20</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default AboutMe