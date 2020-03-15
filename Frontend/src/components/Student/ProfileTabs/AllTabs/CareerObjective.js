import React, { Component } from 'react';
import axios from 'axios';
import backendServer from '../../../../webConfig'


class CareerObjective extends Component {
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            careerObjective:"",
            editing:false,
            flag:true
        }

        // this.state.fname = this.props.entireData.fname;
    }

        componentDidUpdate() {
            if(this.props.careerObjective!=this.state.careerObjective && this.state.flag){
                this.setState({
                    careerObjective : this.props.careerObjective,
                    flag:false
                })
            }
            
        }
    
        submitEdit = (e) => {
            const data = {
                careerObjective: this.state.careerObjective,
                id:localStorage.getItem('id')
            }
            axios.post(`${backendServer}/api/account/updateStudentObjective`, data)
                .then(response => {
                    console.log(response);
                    if (response.status == 200) {
                        //
                    }
                }
                ).catch(ex => {
                    alert(ex);
                });
            this.setState({
                editing: false,
            })
        }
    
        cancelEdit = (e) => {
            this.setState({
                careerObjective: this.props.careerObjective,
                editing: false,
            })
        }
        careerObjectiveChangeHandler =(e)=>{
            this.setState({
                careerObjective: e.target.value,
                editing:true
            })
        }
    render() {

        let buttons= null;
        if(this.state.editing){
            buttons= 
                <p>
                    <button onClick={this.submitEdit} className="btn btn-success edit-button">Save</button>
                    <button onClick={this.cancelEdit} className="btn btn-danger edit-button">Cancel</button>
                </p>
        }

            return(
                <div className="card-body">
                     <h4 className="card-title">My Journey</h4>
                     <div className="row"></div>
                    <p className="card-text text-primary">What are you passionate about? What are you looking for on Handshake? What are your experiences or skills?</p>
                    <textarea className="form-control" value={this.state.careerObjective} onChange={this.careerObjectiveChangeHandler} name="jobDescription" rows="3"></textarea>
                    {buttons}
                </div>
            )
        }
       
}

export default CareerObjective;