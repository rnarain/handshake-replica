import React, { Component } from 'react';
import BasicInfo from '../ProfileTabs/AllTabs/BasicInfo';
import CareerObjective from '../ProfileTabs/AllTabs/CareerObjective';
import Education from '../ProfileTabs/AllTabs/Education';
import Experience from '../ProfileTabs/AllTabs/Experience';
import Skills from '../ProfileTabs/AllTabs/Skills';




class Home extends Component {

    render() {
        return (
            <div class="handshake-body">
                <div className=" col-sm-8 col-sm-offset-2 profile-container card-columns">
                        <div className="card col-sm-4">
                            <div className="box-part text-center">
                                <BasicInfo />
                            </div>
                            <div className="box-part">
                                <BasicInfo />
                            </div>
                            </div>
                        <div className="card col-sm-8">
                            <div className="box-part">
                                <CareerObjective />
                            </div>
                            <div className="box-part">
                                <Education />
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
