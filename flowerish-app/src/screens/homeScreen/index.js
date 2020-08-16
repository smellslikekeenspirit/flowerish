import React from 'react';
import {Typography} from '@material-ui/core';
import lightWave from '../../assets/lightwave.png';
import darkWave from '../../assets/darkwave.png';

const styles = {
  lightWave: {
    backgroundColor: '#EBF3F5',
  },
  darkWave: {

  }
}

export const HomeScreen = () => {
  return(
    <div>
      <div>

      </div>
      <img src={lightWave} style={styles.lightWave}/>
      <div style={styles.body}>
        <img src={darkWave} />
      </div>
    </div>
    

  );
};