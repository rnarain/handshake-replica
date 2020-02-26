import React, { Component } from 'react';

class BasicInfo extends Component {
    // constructor(props) {
    //     //Call the constrictor of Super class i.e The Component
    //     super(props);
    //     //maintain the state required for this component
    //     this.state = {
    //         fname:"",
    //         lname:"",
    //         college:"",
    //         yearOfPassing:"",
    //         major:"",
    //         gpa:"",
    //         profilePicURL:""
    //     }
    // }

    //     componentWillMount() {
           
    //     }
    render() {
        
        return (
            <div className="card-body text-center">
                <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image" /></p>
                <h4 className="card-title">Sunlimetech</h4>
                <p className="card-text">This is basic card with image on top, title, description and button.</p>
                <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
            </div>
        )
    }
}

export default BasicInfo;
