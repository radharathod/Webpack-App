import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom';

import User from './containers/User';
import asyncComponent from './hoc/asyncComponent';

const AsyncParatha = asyncComponent(() => {
    return import('./containers/Paratha.js');
});

class App extends Component {
    render () {
        return(
            <div>
                <div>
                    <Link to="/">User</Link> |
                    <Link to="/paratha"><h2>Paratha</h2></Link>
                </div>
                <div>
                    <Route path="/" exact component={User} />
                    <Route path="/paratha" component={AsyncParatha} />
                </div>
            </div>
        );
    }
}

export default App;