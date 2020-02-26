import React, { Component } from 'react';

class Skills extends Component {
   
    render() {
        return (
        <div className="card">
            <div className="card-body text-center">
                <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image" /></p>
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">This is basic card with image on top, title, description and button.</p>
                <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
            </div>
        </div>
        )
    }
}

export default Skills;