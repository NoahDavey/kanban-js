import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "../components/Layout";
import { NavigationBar } from "../components/NavigationBar";
import { Jumbotron } from "../components/Jumbotron";
import { VerticalNav } from "../components/VerticalNav";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                {/* <VerticalNav/> */}
                {/* <Jumbotron/> */}
                <Layout>
                    <Router>
                        <Switch>
                            <Route path="/about" component={About}></Route>
                            <Route path="/contact" component={Contact}></Route>
                            <Route exact path="/" component={Home}></Route>
                            <Route component={NoMatch}></Route>
                        </Switch>
                    </Router>
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;