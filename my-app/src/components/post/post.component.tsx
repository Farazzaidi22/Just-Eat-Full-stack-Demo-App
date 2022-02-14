import React from 'react';
import './post.styles.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const Post = ({Id, Name, LogoUrl, Cuisines, RatingStars}) => {

    return (
            <div className='post-border'>
                <h4 className='title'> { 
                        (Name.length < 30)
                        ? <span> {Name} </span>
                        : 
                        <span> {Name.slice(0, 30) + "..."} </span>
                    } 
                </h4>
                <img src={LogoUrl} className='img-short'></img>
                <ul className='menu'>
                    <h3>Menu</h3>
                    {Cuisines.slice(0,2).map(d => (<li >{d.Name}</li>))} 
                </ul>
                <Typography component="legend">Ratings</Typography>
                <Rating name="read-only" value={RatingStars/2} precision={0.1} readOnly />
            </div>
    );

}

export default Post