import React from 'react';
import {Button, TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';
import flowerish from '../../assets/flowerish.png';

const styles = {
  layout: {
    backgroundColor: '#002C41',
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
    width: '40%',
  },
  button: {
    width: '100%',
    marginTop: '5%',
    borderRadius: '10px',
    backgroundColor: '#78A1BB',
    color: '#FFFFFF',
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
      <img src={flowerish} style={styles.flowerish}/>
      <form style={styles.form}>
        <TextField 
          label="username"
          variant="filled"
          placeholder="flourish@gmail.com" 
          type="text" 
          style={styles.username}
        />
        <Link to="/home" style={styles.link}>
          <Button style={styles.button}>
            let's flourish!
          </Button>
        </Link>
      </form>
    </div>
  );
};

