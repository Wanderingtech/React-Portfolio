import React from "react";
function PortfolioCard(props){
    return(
        <div className="card" style={{width: "18rem", margin: "1%"}}>
        <img className="card-img-top" src= {props.screenshot} alt={props.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.github} className="btn btn-primary">Github</a>
          <a href={props.live} className="btn btn-primary">Live</a>
        </div>
      </div>)

}

export default PortfolioCard;
