import React from 'react';
import './contact.css'
function Contact(){
    return(
        <div className="container contact-form w-25">
        <h2>Contact Form</h2>
        <hr/>
        <div className="row">
          <form action="https://formspree.io/xoqkvqwq" method="POST">
            <div className="col-lg-12"></div>
            <div className="form-group w-100">
              <label>Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="_replyto" />
            </div>
            <div className="form-group w-100">
              <label>Message</label>
              <textarea className="form-control" rows="7" name="name"></textarea>
            </div>
            <div className="form-group">
              <button className="submit btn btn-primary btn-block w-50" id="submit">Submit</button>
            </div>
            </form>
        </div>
        </div>
    )
}
export default Contact