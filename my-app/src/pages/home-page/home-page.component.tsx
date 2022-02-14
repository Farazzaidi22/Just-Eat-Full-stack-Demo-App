import React, { useState } from 'react';

import Post from '../../components/post/post.component';
import Header from '../../components/header/header';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


import './home-page.styles.css'

const Home = ({posts}) => {

  const [value, _value] = useState('')

  return(
    <Container component="main" maxWidth="lg" >
     <Header title='home'/>
     
      <TextField
          sx={{ marginBottom:'30px'}}
          placeholder="Search by name"
          size="small"
          onChange={(e) => _value(e.target.value)}
          type="search"
          value={value}
      />
      
      <Grid container spacing={{ xs: 1, sm: 2, md: 2 }} columns={{ xs: 1, sm: 4, md: 8 }}>
            {
              value === '' && posts.map((post) =>  (
                <Grid item xs={1} sm={1} md={2} >
                  <Post {...post}/>
                </Grid>
              ))
            }
			{
              value !== '' && posts.filter(x => x.Name.includes(value)).map((post) =>  (
                <Grid item xs={1} sm={1} md={2} >
                  <Post {...post}/>
                </Grid>
              ))
            }
      </Grid>
    </Container>
  )
}

export default Home