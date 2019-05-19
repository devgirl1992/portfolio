import React from 'react';
import { Switch, Route } from "react-router-dom";


import Home from "./home";
import AboutMe from "./aboutMe";
import Contact from "./contact";

import Projects from "./projects";

const Router = () => {
    return (
        <switch>

            <Route  exact path="/" component={Home} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />

        </switch>
    );
};

export default Router;