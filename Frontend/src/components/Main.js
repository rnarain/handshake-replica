import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import StudentHome from './Student/Home/Home';
import Postings from './Student/Jobs/Postings';
import Applications from './Student/Jobs/Applications';


import Navbar from './LandingPage/Navbar';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';


//Create a Main Component
class Main extends Component {
    render(){
        let navRoute = null;
        if (localStorage.getItem('id')) {
            navRoute = <Navbar />
            }
        else{
            console.log("cookie to na");
        }

        return(
            <div>
                {/*Render Different Component based on Route*/}
                {navRoute}
                <Route exact path="/" render={() => <Redirect to="/login" />} />
                <Route path="/login" component={Login}/>
                <Route path="/student/:id" component={StudentHome}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/postings" component={Postings}/>
                <Route path="/applications" component={Applications}/>

               
            </div>
        )
    }
}
//Export The Main Component
export default Main;