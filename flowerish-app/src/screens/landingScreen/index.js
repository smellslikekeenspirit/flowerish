import React from 'react';
import {Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

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
  button: {
    borderRadius: '10px',
    backgroundColor: '#78A1BB',
    color: '#FFFFFF',
    
  },
}

export const LandingScreen = () => {
  return(
    <div style={styles.layout}>
      <Typography >flowerish</Typography>
      <Link to="/home" style={styles.link}>
        <Button style={styles.button}>
          let's flourish!
        </Button>
      </Link>
    </div>
  );
};
