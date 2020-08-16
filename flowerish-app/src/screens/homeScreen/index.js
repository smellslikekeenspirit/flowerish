import React, {useState} from 'react';
import {Typography, Drawer, Button} from '@material-ui/core';
import waves from '../../assets/waves.png';

const styles = {
  home: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  nav: {
    backgroundColor: '#EBF3F5',
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
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = (anchor) => (
    <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <Typography>hello</Typography>
        <Typography>hello</Typography>
        <Typography>hello</Typography>
    </div>
  )

  return(
    <div style={styles.home}>
      <div style={styles.nav}>
        <Button onClick={toggleDrawer(true)}>NAV</Button>
        <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
          {list(open)}
        </Drawer>
        
      </div>
      <img src={waves} style={styles.waves}/>
      <div style={styles.body}>
        
      </div>
    </div>
  );
};