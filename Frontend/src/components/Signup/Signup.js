import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';

//Define a Signup Component
class Signup extends Component {
    //call the constructor method
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            email: "",
            password: "",
            authFlag: false
        }
        //Bind the handlers to this className
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.submitSignup = this.submitSignup.bind(this);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount() {
        this.setState({
            authFlag: false
        })
    }
    //email change handler to update state variable with the text entered by the user
    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    //password change handler to update state variable with the text entered by the user
    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    //submit Signup handler to send a request to the node backend
    submitSignup = (e) => {
        var headers = new Headers();
        //prevent page from refresh
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/Signup', data)
            .then(response => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {
                    this.setState({
                        authFlag: true
                    })
                } else {
                    this.setState({
                        authFlag: false
                    })
                }
            });
    }



    render() {

        //redirect based on successful Signup
        let redirectVar = null;
        if (cookie.load('cookie')) {
            redirectVar = <Redirect to="/home" />
        }

        var years = [];
        for (var i = 2025; i > 1950; i--) {
            years.push(i);
        }
        let listOfYears = years.map(year => {
            return (
                <option value={year}> {year} </option>
            )
        })
        return (
            <div className="container">
                {redirectVar}
                <div className="Signup-form">

                    <div className="sidebar col-sm-4">
                        <a className="logo" href="https://www.joinhandshake.com"><img alt="Handshake logo image" src="https://handshake-production-cdn.joinhandshake.com/assets/logo-icon-2d294d9834da88f5fdf0ab747dd89fb15f8ab7c12a3e193294bab3d522d71a2c.svg" height="42" /></a>
                        <div className="content">

                            <h1 className="marketing-title">
                                Join the Handshake community
                                    &nbsp;
</h1>
                            <div className="marketing-content">
                                <p>Discover jobs and internships based on your interests.</p>
                            </div>
                            <div data-bind="invisible: prompt_for_linked_account_password">
                                <a href="/employer_registrations/new">Are you an employer? Create an account here.</a>

                            </div>
                        </div>
                    </div>


                    <div className="main col-sm-8">
                        <div className="centered-container top-aligned">
                            <div class="margin70">
                                <form>
                                    <div className="form-group col-md-12">
                                        <label for="email">College</label>
                                        <input onChange={this.emailChangeHandler} type="text" className="form-control" name="college" placeholder="College" />
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-6">
                                            <label for="fname">First Name</label>
                                            <input type="text" className="form-control" placeholder="First name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="lname">Last Name</label>
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-6">
                                            <label for="lname">Major</label>
                                            <input type="text" className="form-control" placeholder="Major" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="fname">Year of passing</label>
                                            <select class="form-control">{listOfYears}</select>
                                        </div>

                                    </div>
                                    <div className="form-group col-md-12">
                                        <label for="email">Email</label>
                                        <input onChange={this.emailChangeHandler} type="text" className="form-control" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-6">
                                            <label for="password">Password</label>
                                            <input onChange={this.passwordChangeHandler} type="password" className="form-control" name="password" placeholder="Password" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="confpassword">Confirm Password</label>
                                            <input onChange={this.passwordChangeHandler} type="password" className="form-control" name="confpassword" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <button onClick={this.submitSignup} className="btn btn-primary">Signup</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
//export Signup Component
export default Signup;