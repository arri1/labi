import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.css'
const Image = ({
    src, alt, className, width, height, ...attrs,
}) => {
    if(!src){
        src="https://cdn.wallpapersafari.com/95/35/MtyJj7.jpg"
    }

    const classes = classNames(
        className,
    );

    return(
    <img 
        src={src}
        alt={alt}
        className={classes}
        width={width}
        height={height}
    
    />
    );
};

Image.PropTypes={
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    width=PropTypes.number,
    height=PropTypes.number,
};

Image.defaultProps={
    src: "https://cdn.wallpapersafari.com/95/35/MtyJj7.jpg",
    alt: "image name",
    className: '',
    

};
export default Image;