import React from 'react';
import {Box, Typography, Button, Input} from '@material-ui/core';
import {Link} from 'react-router-dom';
import flowerish from '../../assets/flowerish.png';

const styles = {
  layout: {
    backgroundColor: '#002C41',
    color: '#002C41',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  flowerish: {
    backgroundColor: '#EBF3F5',
    width: 600,
    height: 600,
    resizeMode: 'contain',
  },
  input: {
    color: 'white',
  },
  button: {
    width: '100%',
    marginTop: '5%',
    borderRadius: '10px',
    color: 'secondary',
    backgroundColor: '#78A1BB',
    color: '#FFFFFF',
    textTransform: 'lowercase',
    width: "13vw",
    height: "5vh",
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
  },
  username: {
    backgroundColor: 'white',
    borderRadius: '10px',
  }
}

export const LandingScreen = () => {
  return(
    <div style={styles.layout}>
      <Box>
      <img src={flowerish} className='center' style={styles.flowerish}/>
      <Typography variant="h1">flowerish</Typography>
      </Box>
      <Box  display='flex' flexDirection="column" alignItems='center'>
        <label>username</label>
        <Input placeholder="username" style={styles.input}
        inputProps={{ 'aria-label': 'description' }} />
        <p></p>
      <Link to="/home" style={styles.link}>
        <Button fullWidth="true" size='large' pt={2} style={styles.button}>
          let's flourish!
        </Button>
      </Link>
      </Box>
    </div>
  );
};

