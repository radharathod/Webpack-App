import React from 'react';

import classes from './ParathaImage.css';

import alooparatha from '../../assets/Images/alooparatha.jpg';
import beetrootparatha from '../../assets/Images/beetrootparatha.jpg';
import spinachparatha from '../../assets/Images/spinachparatha.jpg';


const ParathaImage = (props) => (
    <div className={classes.ParathaImage}>
        <img src={alooparatha} className={classes.ParathaImg} />
     
        <img src={beetrootparatha} className={classes.ParathaImg} />
        
        <img src={spinachparatha} className={classes.ParathaImg} />
    </div>
);

export default ParathaImage;