import React from 'react';
import {Typography} from '@material-ui/core';
import waves from '../../assets/waves.png';

const styles = {
  home: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  waves: {
    backgroundColor: '#EBF3F5',
  },
  body: {
    flexGrow: 1,
    backgroundColor: '#002C41',
  }
}

export const HomeScreen = () => {
  return(
    <div style={styles.home}>
      <div>

      </div>
      <img src={waves} style={styles.waves}/>
      <div style={styles.body}>
        <Typography>what</Typography>
      </div>
</div>
    

  );
};