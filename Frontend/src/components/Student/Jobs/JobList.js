import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// let selectedfilters= [0,3];
const jobTypes = {
    0: "Full-Time",
    1: "Part-Time",
    2: "Internship",
    3: "On-Campus"
}

//create the Navbar Component
class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobList: [],
            selectedJob: {},
            selectedPageNumber: 0
            
        }
        this.showJobDetail = this.showJobDetail.bind(this);
        this.paginationHandler = this.paginationHandler.bind(this);

    }
    // filterJobs = ()=>{
    //     console.log("in filter jobs");

    //     this.props.jobList.filter((job)=>{
    //         selectedfilters.includes(job.category)
    //     })
    // } 


    componentDidUpdate() {
        if (Object.keys(this.state.selectedJob).length === 0) {
            if (this.props.jobList.length > 0) {
                this.setState({
                    selectedJob: this.props.jobList[0]
                })
            }
        }
        // else if(this.state.selectedJob.jobID !== this.props.jobList.jobID){
        //     if(this.props.jobList.length > 0){
        //         this.setState({
        //             selectedJob :this.props.jobList[0]
        //         })
        // }
    }
    showJobDetail = (e) => {
        this.setState({
            selectedJob: e
        })
    }

    paginationHandler = (e) => {
        this.setState({
            selectedJob: e
        })
    }

    

    //handle logout to destroy the cookie

    render() {

        

        let jobs = this.props.jobList.map(job => {
            return (
                <div className="row job"  key= {job.jobID} onClick={() => { this.showJobDetail(job) }} >
                    <div className="col-sm-12">
                        <h5> {job.title}</h5>
                        <p className="smallText"> {job.name} - {job.location}</p>
                        <span className="greyText smallText">{jobTypes[job.category]}</span>
                    </div>
                </div>
            )
        })

        let pages = this.props.jobList.length / 25;
        if (this.props.jobList.length % 25 !== 0) {
            pages++
        }


            let links = [];
            if(pages > 0){
                for (let i = 1; i <= pages; i++) {
                    links.push(<li className="page-item" key={i}><a className="page-link" href="#">
                        {i}
                        </a></li>
                    )
                }
        }


        //         const pageLinks = [];
        //         if(pages > 0){
        // for(let i =1; i <pages ; i++){
        //             return(
        //                 pageLinks.push(<li class="page-item"><a class="page-link" href="#">i</a></li>)
        //             )

        //                             }
        //         }





        //if Cookie is set render Logout Button
        return (
            <div className="row jobList">
                <div className="col-sm-4 jobListLeft">
                    {jobs}
                    {/* pagination */}
                    <nav>
                        <ul className="pagination">
                            {links}
                        </ul>
                    </nav>
                </div>
                <div className="col-sm-8 jobListRight">
                    <h3>{this.state.selectedJob.title}</h3>
                    <p>{this.state.selectedJob.name}</p>
                    <span className="greyText marginright10">
                        <i className="glyphicon glyphicon-briefcase"></i> {jobTypes[this.state.selectedJob.category]} </span>
                    <span className="greyText marginright10"><i className="glyphicon glyphicon-map-marker"></i> {this.state.selectedJob.location}</span>
                    <span className="greyText marginright10"><i className="glyphicon glyphicon-usd"></i>{this.state.selectedJob.salary}</span>
                    <span className="greyText marginright10"><i className="glyphicon glyphicon-time"></i> Posted {this.state.selectedJob.postedDate}</span>
                    <div className="card">
                        <div className="card-body applyBox row">
                            <div className="col-sm-10">
                                Applications close on {this.state.selectedJob.deadLineDate} </div>
                            <div className="col-sm-2">
                                <button type="button" onClick={this.open} className="btn btn-success" data-toggle="modal" data-target="#exampleModalLong">Apply</button>
                            </div>

                        </div>
                        <p>{this.state.selectedJob.description}</p>
                    </div>
                </div>
            </div>



        )
    }
}

export default JobList;