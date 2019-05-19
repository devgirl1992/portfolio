import React, {Component} from 'react';
import Foto from "../image/Foto.jpg";
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>

                        <img
                            className="contact-img"
                            src= { Foto }
                        />
                        <h3>Azadeh Galidari</h3>
                        <p>

                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h3>Contact Me</h3>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent>
                                        <i className="fas fa-phone-square"  aria-hidden="true" />
                                        (+49)1522-999-0701
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent>
                                        <i className="fas fa-envelope-square"></i>
                                        azadeh.galidari.1992@gmail.com
                                    </ListItemContent>
                                </ListItem>

                            </List>

                        </div>
                    </Cell>
                </Grid>

            </div>
        );
    }
}

export default Contact;