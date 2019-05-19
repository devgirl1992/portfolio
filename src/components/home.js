import React, {Component} from 'react';
import Foto from "../image/Foto.jpg";
import '../App.css'
import { Grid, Cell } from "react-mdl";

class Home extends Component {
    render() {
        return (
            <div className="home-container">

                <Grid className="home-grid">
                    <Cell col={12}>
                        <div  className="img-container">
                            <img
                                className="avatar-img"
                                src= { Foto }
                            />
                        </div>


                            <div className="banner-text">
                                <h4>Full Stack WEb Developer</h4>
                                <hr/>
                                <p>
                                     HTML/CSS/SCSS<br />
                                     JavaScript/ES6 <br />
                                     React <br />
                                     NodeJs <br />
                                     Express <br />
                                     MongoDB
                                </p>

                                <div className="social-links">
                                    {/* Github */}
                                    <a href="http://github.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square"  aria-hidden="true"></i>
                                    </a>

                                    {/* LinkedIn */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square"  aria-hidden="true"></i>
                                    </a>
                                </div>

                            </div>

                    </Cell>

                </Grid>


            </div>
        );
    }
}

export default Home;
