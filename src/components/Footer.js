import React from 'react';
function Footer(){
    return(
        <footer id= "footer">
        <div className="card text-center">
          <div className="card-header">
            Check me out
          </div>
          <div className="card-body">
            <a href="https://github.com/Wanderingtech" rel="noopener noreferrer" id="github" className="btn btn-primary" target="_blank">
              <i className="fab fa-github"></i>
              Github
            </a>
              
            <a href="https://www.linkedin.com/in/heather-stolz-62176a144/" rel="noopener noreferrer" id="linkedin" className="btn btn-primary" target="_blank">
            <i className="fab fa-linkedin"></i>
            Linkedin
          </a>
            <a href="https://docs.google.com/document/d/1_iE3bIZA7AjrbeyVCxJNvxxW2X_b3UIHUgBV-Q0rvUc/edit?usp=sharing" rel="noopener noreferrer" id="resume" className="btn btn-primary" target="_blank">
            <i className="fas fa-file"></i>
            Resume
            </a>
          </div>
        </div>
      </footer>
    )
}
export default Footer