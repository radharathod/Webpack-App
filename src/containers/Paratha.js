import React, { Component } from 'react';

import ParathaImage from '../components/ParathaImage/ParathaImage';

class Paratha extends Component {
    render() {
        return (
            <div className={ParathaImage.css}>
                <h1> The Delecious Paratha </h1>
               
                <ParathaImage />
            </div>
        );
    }
}

export default Paratha;