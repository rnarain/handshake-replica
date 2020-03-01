import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import PostingsNavbar from './PostingsNavbar';
import JobList from './JobList';



class Postings extends Component {
    constructor(props) {
        //Call the constrictor of Super classNameName i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            jobList: [],
            selectedfilters :[],
            fullTime : false,
            partTime : false,
            internship : false,
            onCampus : false,
        }

        this.filterChangeHandler = this.filterChangeHandler.bind(this);

    }
    //Call the Will Mount to set the auth Flag to false
    async componentWillMount() {
        
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        await axios.get('http://localhost:3001/api/job/getJobs')
            .then(response => {
                this.setState({
                    jobList : response.data.data
                })
            }
            ).catch(ex => {
                alert("error");
            });
    }

    filterChangeHandler = (i) =>{
       let add= false ;

        switch(i){
            case 0 :
                this.setState({
                   fullTime : !this.state.fullTime 
                })
                add = this.state.fullTime;
               break;
            case 1 :
                this.setState({
                    partTime : !this.state.partTime 
                 })
                 add = this.state.partTime;
               break;
            case 2 :
                this.setState({
                    internship : !this.state.internship 
                 })
                 add = this.state.internship;
               break;
            case 3 :
                this.setState({
                    partTime : !this.state.partTime 
                 })
                 add = this.state.partTime;
               break;
       }

       console.log(this.state.fullTime);
      
       if(add){
           this.setState({
            selectedfilters : this.state.selectedfilters.push(i)
           }) 
        }else{
            const index = this.state.selectedfilters.indexOf(i);
            if (index > -1) {
                this.setState({
                    selectedfilters : this.state.selectedfilters.splice(index, 1)
                })
            }
        }
        console.log(add);
       console.log(this.state.selectedfilters);
    }

    render() {
        return (
            <div className="handshake-body">
                <PostingsNavbar />
                <div className=" col-sm-10 col-sm-offset-1 card-columns">
                    <div className="col-sm-12 card">
                        <div className="box-part-container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
                                        <input id="search" type="text" className="form-control" name="search" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-map-marker"></i></span>
                                        <input id="city" type="text" className="form-control" name="city" placeholder="City" />
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-sm-12 filter-buttons">
                                    <button type="button" className="btn btn-outline btn-primary" onClick={()=>{this.filterChangeHandler(0)}}>Full-Time</button>
                                    <button type="button" className="btn btn-outline btn-primary">Part-Time</button>
                                    <button type="button" className="btn btn-outline btn-primary">Internship</button>
                                    <button type="button" className="btn btn-outline btn-primary">On-Campus</button>
                                    <button type="button" className="btn btn-outline btn-primary">Notifications <span className="badge badge-light">4</span></button>
                                    <button type="button" className="btn btn-default">Clear All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 card">
                        <div className="box-part-container margin20"> <JobList jobList={this.state.jobList}/>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Postings;
