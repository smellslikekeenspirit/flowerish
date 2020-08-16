import React from 'react';
import {Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import flowerish from '../../assets/favorish.png';

const styles = {
  layout: {
    backgroundColor: '#EBF3F5',
    color: '#002C41',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
  },
  link: {
    textDecoration: 'none',
  },
  flowerish: {
    backgroundColor: '#EBF3F5',
  },
  button: {
    borderRadius: '10px',
    backgroundColor: '#78A1BB',
    color: '#FFFFFF',
    
  },
}

export const LandingScreen = () => {
  return(
    <div style={styles.layout}>
      <img src={flowerish} style={styles.flowerish}/>
      <Typography variant="h1">flowerish</Typography>
      <form className={classes.root}>
        <label>username</label>
        <Input placeholder="username" inputProps={{ 'aria-label': 'description' }} />
        <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} />
      </form>
      <Link to="/home" style={styles.link}>
        <Button style={styles.button}>
          let's flourish!
        </Button>
      </Link>
    </div>
  );
};

