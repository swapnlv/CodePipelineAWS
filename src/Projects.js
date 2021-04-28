import React, { Component} from 'react';
import PROJECTS from './data/project';

class Project extends Component{
    render(){
        return(
            <div style={{display:'inline-block',width:300,margin:10}}><h3>{this.props.project.title} </h3><br />
            <img src={this.props.project.image}  style={{width:"60%", height:"60%"}} alt="Projects"/><br /><br />
            <a href={this.props.project.link}>{this.props.project.link}</a> <hr />
            </div>
        )
    }
}

class Projects extends Component{
    render(){
        return(
            <div>
                <h1>Highlighted Projects , HELLO HARSH</h1>
                <div>
                    {
                        PROJECTS.map(PROJECTS =>{
                            return (
                                <Project key={PROJECTS.id} project={PROJECTS} />
                            );
                        })
                    }
                </div><br />
            </div>
        )
    }
}
export default Projects;