import React, { Component } from 'react';
import BasicInfo from '../ProfileTabs/AllTabs/BasicInfo';
import CareerObjective from '../ProfileTabs/AllTabs/CareerObjective';
import Education from '../ProfileTabs/AllTabs/Education';
import Experience from '../ProfileTabs/AllTabs/Experience';
import Skills from '../ProfileTabs/AllTabs/Skills';
import axios from 'axios';
import cookie from 'react-cookies';





class Home extends Component {
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            basicinfo: "",
            objective: "",
            education: [],
            experience :"",
            studentid:"",
            studentProfileData : {
                fname:"",
                lname:"",
                college:"",
                yearOfPassing:"",
                major:"",
                gpa:"",
                profilePicURL:""
            }
        }
    }
    //Call the Will Mount to set the auth Flag to false
        componentWillMount() {
        if (cookie.load('cookie')){
            // this.setState({
            //     studentid: cookie.load('cookie')
            // })
            // console.log(cookie.load('cookie'));
            // console.log(this.state.studentid);
        }
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.get('http://localhost:3001/api/account/getStudentDetails/' + cookie.load('cookie'))
            .then(response => {
                let studentProfile =  response.data.data.studentprofile[0];
                let education =  response.data.data.education[0];

                this.setState({
                    education : response.data.data.education,
                    studentProfileData:{
                        fname:studentProfile.fname,
                        lname:studentProfile.lname,
                        college:education.college,
                        degreeType : education.degreeType,
                        yearOfPassing:education.yearOfPassing,
                        major:education.major,
                        gpa:education.gpa,
                        profilePicURL:studentProfile.profilePicURL
                    } 
                })
                //console.log(this.state.studentProfileData)
                }
            ).catch( ex =>{
                this.setState({
                    authFlag: false
                })
            });
    }

    AddEducationHandler = (e) => {
        this.setState({
            education : this.state.education.concat({
                educationID: "",
                studentID: "",
                college: "",
                major: "",
                yearOfStarting: null,
                yearOfPassing: null,
                CGPA: "",
                degreeType: "",
                add:true
            })
        })
    }
   
    render() {
        console.log(this.state.education);
        let educationTabs = this.state.education.map(e => {
            return(
                <Education key={e.educationID} education= {e} />
            )
        })
        return (
            <div class="handshake-body">
                <div className=" col-sm-8 col-sm-offset-2 profile-container card-columns">
                        <div className="card col-sm-4">
                            <div className="box-part">
                                <BasicInfo entireData={this.state.studentProfileData}/>
                            </div>
                            <div className="box-part">
                                {/* <BasicInfo /> */}
                            </div>
                            </div>
                        <div className="card col-sm-8">
                            <div className="box-part">
                                <CareerObjective />
                            </div>
                            <div className="box-part">
                            <div className="card-body">
                            <h4 className="card-title">Education</h4>
                                {educationTabs}
                             <button onClick={this.AddEducationHandler} className="btn btn-info form-control edit-button">Add Education</button>
                            
                            </div>
                            </div>
                        </div>
                
                        {/* <div className="col-sm-4 card">
                            <div className="box-part text-center">
                                <BasicInfo />
                            </div>
                        </div>
                        <div className="col-sm-8 card">
                            <div className="box-part text-center">
                                <CareerObjective />
                            </div>
                        </div>
                
                        <div className="col-sm-4 card">
                            <div className="box-part text-center">
                                <BasicInfo />
                            </div>
                        </div>
                        <div className="col-sm-8 card">
                            <div className="box-part text-center">
                                <CareerObjective />
                            </div>
                        </div>
                 */}
                </div>
            </div>
        )
    }
}

export default Home;
