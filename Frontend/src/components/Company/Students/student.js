import React, { Component } from 'react';
// import BasicInfo from '../ProfileTabs/AllTabs/BasicInfo';
// import AccountInfo from '../ProfileTabs/AllTabs/AccountInfo';
// import CareerObjective from '../ProfileTabs/AllTabs/CareerObjective';
// import Education from '../ProfileTabs/AllTabs/Education';
// import Experience from '../ProfileTabs/AllTabs/Experience';
// import Skills from '../ProfileTabs/AllTabs/Skills';
import axios from 'axios';
import {colleges , skills} from '../../../enum'
import cookie from 'react-cookies';





class Student extends Component {
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            students: [],
        }
    }
    //Call the Will Mount to set the auth Flag to false
    async componentWillMount() {
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        await axios.get('http://localhost:3001/api/account/getAllStudents')
            .then(response => {
                console.log(response);
                this.setState({
                    students: response.data.data
                })
            }
            ).catch(ex => {
                alert(ex);
            });
    }

    render() {
        let students = this.state.students.map(student => {
            return (
                <div className="box-part">
                    <div className="card-body container-fluid">
                        <div className="col-sm-2">
                            <img className=" img-fluid profile-img" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image" />
                        </div>
                        <div className="col-sm-10">
                            <div className="row">
                            <a href=""><h4 className="card-title">{student.fname} {student.lname}</h4></a>
                            <h5 className="card-text">{student.college}</h5>
                            </div>
                            <div className="row">
                            <div className="col-sm-6 nopadding">
                            <p className="card-text">{student.degreeType} ,Graduates {student.yearOfPassing} </p>
            <p ><i className="glyphicon glyphicon-briefcase"></i>{student.title} at {student.company}</p>
                        </div>

                        <div className="col-sm-6 nopadding">
                            <p >{student.major} </p>
                            <p > GPA : {student.gpa} / 4 </p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>

            )
        })

        let collegesCheckboxes = Object.keys(colleges).map((key)=> {
            return(
                <div className="form-check" key={key}>
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <span className="form-check-label">{colleges[key]}</span>
  </div>
            )
        }) 
//         <div className="form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1">
//     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
        return (
            <div className="handshake-body">
                <div className=" col-sm-10 col-sm-offset-1 profile-container card-columns">
                    <div className="card col-sm-3">
                        <div className="box-part-nopadding">
                            <div className="padding-inside">
                                <div className="header-filter">
                                    <h4>Filters</h4>
                                </div>
                                <div className="style-divider"></div>
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <a type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Name
        </a>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                enter name
      </div>
                                        </div>
                                    </div>
                                    <div className="style-divider"></div>

                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <a className="collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    College Name
        </a>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                {collegesCheckboxes}
      </div>
                                        </div>
                                    </div>
                                    <div className="style-divider"></div>

                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <a className="collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    SkillSet
        </a>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                                Enter SkillSet
      </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-sm-9">
                        {students}
                    </div>
                </div>
            </div>
        )
    }
}

export default Student;
