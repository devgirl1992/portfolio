import React from 'react';
import {Content, Drawer, Layout, Navigation, Header,} from "react-mdl";
import {Link} from "react-router-dom";
import Router from "./router";


const Menubar = () => {
    return (


            <div className="demo-big-content">
                <Layout>
                    <Header className="headerBackGround"  title="Title" scroll>
                        <Navigation>
                            <Link to="/">HOME</Link>
                            <Link to="/aboutme">Aboute Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>

                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/" to="/">MyPortfolio</Link>}>
                        <Navigation>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>

                    <Content>
                        <div className="page-content" >
                        <Router />
                        </div>
                    </Content>

                </Layout>
            </div>


    );
};

export default Menubar;