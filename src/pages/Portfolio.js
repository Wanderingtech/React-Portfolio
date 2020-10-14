import React from 'react';
import PortfolioCard from './PortfolioCard';
import projects from "./projects.json";
class Portfolio extends React.Component{
    state = {
        projects
    }
    render(){
        return(<div className= "container d-flex flex-wrap">
            {this.state.projects.map((app,key)=>{
                return(<PortfolioCard
                    title= {app.title}
                    github= {app.github}
                    live= {app.live}
                    description= {app.description}
                    screenshot= {app.screenshot}
                    id= {app.id}
                    key = {key}/> )
            })}
        </div>)
    }
}
export default Portfolio