import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            educationID: "",
            college: "",
            major: "",
            yearOfPassing: "",
            gpa: "",
            degreeType: "",
            add:false,
            edit: false
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.setState({
            educationID: this.props.education.educationID,
            college: this.props.education.college,
            major: this.props.education.major,
            yearOfPassing: this.props.education.yearOfPassing,
            gpa: this.props.education.CGPA,
            degreeType: this.props.education.degreeType,
            add: this.props.education.add,
            edit: this.props.education.edit
        })

    }

    editButtonChangeHandler = (e) => {
        this.setState({
            edit: !this.state.edit,
            add:false
        })
    }

    collegeChangeHandler = (e) => {
        this.setState({
            college: e.target.value
        })
    }
    eduLevelChangeHandler = (e) => {
        this.setState({
            degreeType: e.target.value
        })
    }
    majorChangeHandler = (e) => {
        this.setState({
            major: e.target.value
        })
    }
    // startDateChangeHandler = (e) => {
    //     this.setState({
    //         : e.target.value
    //     })
    // }
    endDateChangeHandler = (e) => {
        this.setState({
            yearOfPassing: e.target.value
        })
    }
    gpaChangeHandler = (e) => {
        this.setState({
            gpa: e.target.value
        })
    }

    

    cancelEdit = (e) => {
        this.setState({
            edit: false,
        })
        // this.state =[]
    }

    submitEdit = (e) => {
        e.preventDefault();
        this.setState({
                educationID: this.state.educationID,
                college: this.state.college,
                major: this.state.major,
                yearOfStarting: this.state.yearOfStarting,
                yearOfPassing: this.state.yearOfPassing,
                gpa: this.state.gpa,
                degreeType: this.state.degreeType,
                add:false,
                edit: false
            })
    }
    render() {
        if (this.state.edit || this.state.add) {
            return (
                <div>
                    <div className="form-group">
                        <label>College</label>
                        <input type="text" onChange={this.collegeChangeHandler} value={this.state.college} className="form-control" id="inputAddress" placeholder="College" />
                    </div>
                    <div className="form-group">
                        <label>Education Level</label>
                        <input type="text" onChange={this.eduLevelChangeHandler} value={this.state.degreeType} className="form-control" id="inputAddress" placeholder="Education Level" />
                    </div>
                    <div className="row">
                        <div className="form-group  col-sm-6">
                            <label >Major</label>
                            <input type="text" onChange={this.majorChangeHandler} value={this.state.major} className="form-control" id="inputAddress" placeholder="Major" />
                        </div>
                        <div className="col-sm-6">
                            <label >GPA</label>
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" onChange={this.gpaChangeHandler} value={this.state.gpa} className="form-control" />
                                </div>
                                <div className="col-sm-6">
                                    <h5>Out of 4</h5>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label >Start Date</label>
                            <input type="date" onChange={this.startDateChangeHandler} className="form-control" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label >End Date</label>
                            <input type="date" onChange={this.endDateChangeHandler} value={this.state.yearOfPassing} className="form-control" />
                        </div>
                    </div>
                    <button onClick={this.submitEdit} className="btn btn-success edit-button">Save</button>
                    <button onClick={this.cancelEdit} className="btn btn-danger edit-button">Cancel</button>
                </div>

            )
        }
        else {
            return (
                <div className="row">
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-9">
                        <h4>{this.state.college}</h4>
                        <p>{this.state.degreeType} , {this.state.major} </p>
                        <p>{this.state.yearOfPassing}</p>
                        <p> <b> GPA : </b>{this.state.gpa} / 4</p>
                    </div>
                    <div className="col-sm-1">
                        <button type="button" className="btn btn-default btn-circle" onClick={this.editButtonChangeHandler}>< i className="glyphicon glyphicon-pencil"></i></button>
                    </div>
                </div>
            )
        }
    }
}
export default Education; 