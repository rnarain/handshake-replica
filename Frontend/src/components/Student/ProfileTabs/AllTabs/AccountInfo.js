import React, { Component } from 'react';

class AccountInfo extends Component {
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            phone:"",
            email:"",
            edit:false,
            flag:true
        }

        this.editButtonChangeHandler = this.editButtonChangeHandler.bind(this);

        // this.state.email = this.props.entireData.email;
    }

        componentDidUpdate() {
            console.log(this.props.accountInfo);
            if(this.props.accountInfo.email!=this.state.email  && this.state.flag){
                this.setState({
                    email : this.props.accountInfo.email,
                    phone : this.props.accountInfo.phone,
                    flag:false
                })
            }
            
        }
        editButtonChangeHandler = (e) => {
            this.setState({
                edit: !this.state.edit
            })
        }

        phoneChangeHandler = (e) => {
            this.setState({
            email: e.target.value
            })
        }

        emailChangeHandler = (e) => {
            this.setState({
                phone: e.target.value
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
               <div>
               <h4 className="card-title">Contact Details</h4>
                <input onChange={this.phoneChangeHandler} value={this.state.phone} type="text" className="form-control marginUpBot20" name="phone" placeholder="Phone" />
                <input onChange={this.emailChangeHandler} value={this.state.email} type="text" className="form-control marginUpBot20" name="email" placeholder="Email" />
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
               <button type="button" className="btn btn-default btn-circle pull-right" onClick={this.editButtonChangeHandler}>< i className="glyphicon glyphicon-pencil"></i></button>
                <h4 className="card-title">Contact Details</h4>
                <p>Phone : {this.state.phone} </p>
                <p>Email : {this.state.email}</p>
                </div>
            </div>
        )
    }
    }
}

export default AccountInfo;
