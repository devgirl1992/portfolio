import React, {Component} from 'react';
import Foto from "../image/Foto.jpg";
import '../App.css';

import {Grid, Cell} from "react-mdl";


class AboutMe extends Component {
    render() {
        return (
            <div>

                <Grid>
                    <Cell col={4} className="aboutme-left">
                        <div className="aboutme-left-container">
                            <img
                                className="aboutme-img"
                                src= { Foto }
                            />
                            <h3>Personal Data & Place</h3>
                            <br/>
                            <h5>Date of Birth :  29.06.1992</h5>
                            <h5>Esfahan.Persia</h5>
                            <h5>Nationality : Persian</h5>
                            <hr/>
                            <h3>Recent Activity</h3>
                            <h5>Study Web developing & programing in DCI</h5>
                            <hr/>
                            <h3>My Interests</h3>
                            <h5>-Coding</h5>
                            <h5>-Learn new things</h5>
                            <h5>-Challenge myself</h5>
                            <h5>-Sport</h5>
                        </div>
                    </Cell>

                    <Cell col={8} className="aboutme-right">
                        <div className="aboutme-right-container">
                            <h2>Full stack web developer</h2>

                        </div>
                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default AboutMe;