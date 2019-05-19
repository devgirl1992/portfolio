import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from "react-mdl";
import "../App.css"

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: -1};
    }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
                <Grid>
                    <div className="projects-container">

                        <Cell col={4}>

                            {/* project #1 */}

                            <Card className="card-container">

                                <CardTitle className="card-title-html">HTML/CSS/SCSS Project #1</CardTitle>

                                <CardText className="card-text">
                                    <p>The two languages—HTML and CSS—are independent of one another
                                        and should remain that way. CSS should not be written inside of an HTML document
                                        and vice versa....
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card>

                        </Cell>
                        <Cell col={4}>


                            {/* project #2 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-html">HTML/CSS/SCSS Project #2</CardTitle>

                                <CardText className="card-text">
                                    <p>The two languages—HTML and CSS—are independent of one another
                                        and should remain that way. CSS should not be written inside of an HTML document
                                        and vice versa....
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card>

                        </Cell>


                        <Cell col={4}>


                            {/* project #3 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-html">HTML/CSS/SCSS Project #3</CardTitle>

                                <CardText className="card-text">
                                    <p>The two languages—HTML and CSS—are independent of one another
                                        and should remain that way. CSS should not be written inside of an HTML document
                                        and vice versa....
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card>

                        </Cell>
                    </div>
                </Grid>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <Grid>
                    <div className="projects-container">
                        <Cell col={4}>
                            {/* project #1 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-js">JavaScript Project #1</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        JavaScript, often abbreviated as JS,
                                        is a high-level, interpreted programming language that conforms to the
                                        ECMAScript
                                        specification.
                                        It is a programming language that is characterized as dynamic, weakly typed,
                                        prototype-based and
                                        multi-paradigm.....
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card>
                        </Cell>

                        <Cell col={4}>
                            {/* project #2 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-js">JavaScript Project #2</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        JavaScript, often abbreviated as JS,
                                        is a high-level, interpreted programming language that conforms to the
                                        ECMAScript
                                        specification.
                                        It is a programming language that is characterized as dynamic, weakly typed,
                                        prototype-based and
                                        multi-paradigm.....
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card>
                        </Cell>
                        <Cell col={4}>

                            {/* project #3 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-js">JavaScript Project #3</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        JavaScript, often abbreviated as JS,
                                        is a high-level, interpreted programming language that conforms to the
                                        ECMAScript
                                        specification.
                                        It is a programming language that is characterized as dynamic, weakly typed,
                                        prototype-based and
                                        multi-paradigm.....
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card>
                        </Cell>

                    </div>
                </Grid>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <Grid>
                    <div className="projects-container">
                        <Cell col={4}>
                            {/* project #1 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-react">React Project #1</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        React is a JavaScript library for building user interfaces.
                                        It is maintained by Facebook and a community of individual developers and
                                        companies.
                                        React can be used as a base in the development of single-page or mobile
                                        applications...
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card>
                        </Cell>
                        <Cell col={4}>
                            {/* project #2 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-react">React Project #2</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        React is a JavaScript library for building user interfaces.
                                        It is maintained by Facebook and a community of individual developers and
                                        companies.
                                        React can be used as a base in the development of single-page or mobile
                                        applications...
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card></Cell>
                        <Cell col={4}>

                            {/* project #3 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-react">React Project #3</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        React is a JavaScript library for building user interfaces.
                                        It is maintained by Facebook and a community of individual developers and
                                        companies.
                                        React can be used as a base in the development of single-page or mobile
                                        applications...
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card></Cell>

                    </div>
                </Grid>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <Grid>
                    <div className="projects-container">
                        <Cell col={4}>
                            {/* project #1 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-node">NodeJs Project #1</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        Node.js is an open-source,
                                        cross-platform JavaScript run-time environment that
                                        executes JavaScript code outside of a browser...
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card></Cell>

                        <Cell col={4}>
                            {/* project #2 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-node">NodeJs Project #2</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        Node.js is an open-source,
                                        cross-platform JavaScript run-time environment that
                                        executes JavaScript code outside of a browser...
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card></Cell>

                        <Cell col={4}>
                            {/* project #3 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-node">NodeJs Project #3</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        Node.js is an open-source,
                                        cross-platform JavaScript run-time environment that
                                        executes JavaScript code outside of a browser...
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card>
                        </Cell>

                    </div>
                </Grid>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <Grid>
                    <div className="projects-container">
                        <Cell col={4}>
                            {/* project #1 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-db">Express & MongoDB Project #1</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        MongoDB is a cross-platform document-oriented database program.
                                        Classified as a NoSQL database program, MongoDB uses JSON-like documents with
                                        schemata.
                                        MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public
                                        License...
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card></Cell>

                        <Cell col={4}>
                            {/* project #2 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-db">Express & MongoDB Project #2</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        MongoDB is a cross-platform document-oriented database program.
                                        Classified as a NoSQL database program, MongoDB uses JSON-like documents with
                                        schemata.
                                        MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public
                                        License...
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card></Cell>

                        <Cell col={4}>
                            {/* project #3 */}
                            <Card className="card-container">

                                <CardTitle className="card-title-db">Express & MongoDB Project #3</CardTitle>

                                <CardText className="card-text">
                                    <p>
                                        MongoDB is a cross-platform document-oriented database program.
                                        Classified as a NoSQL database program, MongoDB uses JSON-like documents with
                                        schemata.
                                        MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public
                                        License...
                                    </p>
                                </CardText>

                                <CardActions border className="card-action">
                                    <Button>Github</Button>
                                    <Button>codePen</Button>
                                    <Button>LiveDemo</Button>
                                </CardActions>

                                <CardMenu className="card-menu">
                                    <IconButton name="share"/>
                                </CardMenu>

                            </Card></Cell>

                    </div>
                </Grid>
            )
        }

    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab className="item-tab">html & css & SCSS</Tab>
                    <Tab className="item-tab">React & Redux</Tab>
                    <Tab className="item-tab">NodeJs</Tab>
                    <Tab className="item-tab">express & MongoDB</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="project-content">{this.toggleCategories()}</div>
                        </Cell>

                    </Grid>


                </section>

            </div>
        );
    }
}

export default Projects;