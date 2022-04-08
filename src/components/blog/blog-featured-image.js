import React from "react";

const BlogFeaturedImage = props => {
    // saying !props.img is the same as props.img === null
    if (!props.img) {
        return null;
    }

    return (
        <div className='featured-image-wrapper'>
            <img src={props.img} />
        </div> 
    )

}