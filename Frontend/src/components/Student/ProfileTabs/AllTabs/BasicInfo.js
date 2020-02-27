import React, { Component } from 'react';

class BasicInfo extends Component {
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            fname:"",
            lname:"",
            college:"",
            degreeType : "",
            yearOfPassing:"",
            major:"",
            gpa:"",
            profilePicURL:"",
            flag : true,
            edit:false
        }

        this.editButtonChangeHandler = this.editButtonChangeHandler.bind(this);

        // this.state.fname = this.props.entireData.fname;
    }

        componentDidUpdate() {
            if(this.props.entireData.fname!=this.state.fname  && this.state.flag){
                this.setState({
                    fname : this.props.entireData.fname,
                    lname : this.props.entireData.lname,
                    college : this.props.entireData.college,
                    yearOfPassing : this.props.entireData.yearOfPassing,
                    degreeType : this.props.entireData.degreeType,
                    major : this.props.entireData.major,
                    gpa : this.props.entireData.CGPA,
                    profilePicURL : this.props.entireData.profilePicURL,
                    flag:false
                })
            }
            
        }
        editButtonChangeHandler = (e) => {
            this.setState({
                edit: !this.state.edit
            })
        }

        fNameChangeHandler = (e) => {
            fname: e.target.value
        }

        lNameChangeHandler = (e) => {
            this.setState({
                lname: e.target.value
            })
        }

        cancelEdit = (e) => {
            this.setState({
                edit: !this.state.edit
            })
        }

        submitEdit = (e) => {
            this.setState({
                edit: !this.state.edit
            })
        }
    
    render() {
        if(this.state.edit)
{
        return (
            <div className="card-body">
               <div className=" text-center">
                <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image" /></p>
                <input onChange={this.fNameChangeHandler} value={this.state.lname} type="text" className="form-control" name="lname" placeholder="Last Name" />
                <input onChange={this.lNameChangeHandler} value={this.state.fname} type="text" className="form-control" name="fName" placeholder="First Name" />
                <p>
                    <button onClick={this.submitEdit} className="btn btn-success edit-button">Save</button>
                    <button onClick={this.cancelEdit} className="btn btn-danger edit-button">Cancel</button>
                </p>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="card-body">
              <div className="container-fluid">
               <button type="button" className="btn btn-default btn-circle pull-right" onClick={this.editButtonChangeHandler}>< i class="glyphicon glyphicon-pencil"></i></button>
               </div>
               <div className=" text-center">
               <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image" /></p>
                <h4 className="card-title">{this.state.fname} {this.state.lname}</h4>
                <h5 className="card-text">{this.state.college}</h5>
                <h5 className="card-text">{this.state.degreeType} , {this.state.major} </h5>
                <p >Graduates {this.state.yearOfPassing} </p>
                <p > GPA : {this.state.gpa} / 4 </p>
                </div>
            </div>
        )
    }
    }
}

export default BasicInfo;
