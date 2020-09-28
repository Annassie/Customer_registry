// ./assets/js/components/Home.js

import React, {Component} from 'react';
import {Route, Switch, Redirect, Link, withRouter} from 'react-router-dom';
import Customers from './Customers';
import Companies from './Companies';

class Home extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <Link className={"navbar-brand"} to={"/"}> Customers Registry</Link>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/companies"}> Companies </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Redirect exact from="/" to="/customers" />
                    <Route path="/customers" component={Customers} />
                    <Route path="/companies" component={Companies} />
                </Switch>
            </div>
        )
    }
}

export default Home;