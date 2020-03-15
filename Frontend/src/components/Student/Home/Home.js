import React, { Component } from 'react';
import BasicInfo from '../ProfileTabs/AllTabs/BasicInfo';
import AccountInfo from '../ProfileTabs/AllTabs/AccountInfo';
import CareerObjective from '../ProfileTabs/AllTabs/CareerObjective';
import Education from '../ProfileTabs/AllTabs/Education';
import Experience from '../ProfileTabs/AllTabs/Experience';
import Skills from '../ProfileTabs/AllTabs/Skills';
import axios from 'axios';
import backendServer from "../../../webConfig";


class Home extends Component {
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            basicinfo: "",
            skills:"",
            careerObjective: "",
            education: [],
            accountInfo:{},
            experience :[],
            studentProfileData : {
                fname:"",
                lname:"",
                college:"",
                yearOfPassing:"",
                major:"",
                gpa:"",
                profilePicURL:""
            },
            editable:false
        }
    }
    //Call the Will Mount to set the auth Flag to false
        async componentWillMount() {
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        await axios.get(`${backendServer}/api/account/getStudentDetails/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
                let studentProfile =  response.data.data.studentprofile[0];
                let education =  response.data.data.education[0];

                this.setState({
                    education : response.data.data.education,
                    experience : response.data.data.experience,
                    accountInfo : response.data.data.accountInfo[0],
                    studentProfileData:{
                        fname:studentProfile.fname,
                        lname:studentProfile.lname,
                        college:education.college,
                        degreeType : education.degreeType,
                        yearOfPassing:education.yearOfPassing,
                        major:education.major,
                        gpa:education.gpa,
                        profilePicURL:studentProfile.profilePicURL
                    },
                    careerObjective: studentProfile.careerObjective,
                    skills: studentProfile.skills, 
                })
                //console.log(this.state.studentProfileData)
             
                if(this.props.match.params.id == localStorage.getItem('id')){
                    this.setState({
                        editable:true
                    })
                }
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
                gpa: "",
                degreeType: "",
                add:true
            })
        })
    }

    AddExperienceHandler = (e) => {
        this.setState({
            experience : this.state.experience.concat({
                experienceID:"",
                company:"",
                location:"",
                startDate:"",
                endDate: "",
                title:"",
                description:"",
                add:true
            })
        })
    }
   
    render() {
        let educationTabs = this.state.education.map(e => {
            return(
                <Education key={e.educationID} education= {e} editable={this.state.editable} />
            )
        })
        let experienceTabs = this.state.experience.map(e => {
            return(
                <Experience key={e.experienceID} Experience= {e} editable={this.state.editable}/>
            )
        })

        let addEducationButton = null;
        if(this.state.editable){
            addEducationButton= <button onClick={this.AddEducationHandler} className="btn btn-info form-control edit-button">Add Education</button>
        }
        let addExperienceButton = null;
        if(this.state.editable){
            addExperienceButton= <button onClick={this.AddExperienceHandler} className="btn btn-info form-control edit-button">Add Experience</button>
        }
        return (
            <div className="handshake-body">
                <div className=" col-sm-8 col-sm-offset-2 profile-container card-columns">
                        <div className="card col-sm-4">
                            <div className="box-part">
                                <BasicInfo entireData={this.state.studentProfileData} editable={this.state.editable}/>
                            </div>
                            <div className="box-part">
                                <AccountInfo accountInfo= {this.state.accountInfo} editable={this.state.editable}/>
                            </div>
                            <div className="box-part">
                                <Skills skills= {this.state.skills} editable={this.state.editable} />
                            </div>
                            </div>
                        <div className="card col-sm-8">
                            <div className="box-part">
                                <CareerObjective careerObjective ={this.state.careerObjective} editable={this.state.editable}/>
                            </div>
                            <div className="box-part">
                            <div className="card-body">
                            <h4 className="card-title">Education</h4>
                                {educationTabs}
                                {addEducationButton}
                            </div>
                            </div>
                            <div className="box-part">
                            <div className="card-body">
                            <h4 className="card-title">Experience</h4>
                                {experienceTabs}
                            {addExperienceButton}
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Home;
