import React, {useState} from 'react';
import {Typography, Drawer, Button, IconButton} from '@material-ui/core';
import waves from '../../assets/waves.png';
import instructions from '../../assets/instructions.png'
import {TaskCard} from '../../components/taskCard.js';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Tasks_Sustainability, Tasks_Education, Tasks_Action, returnTask} from '../../components/tasks.js';


const styles = {
  home: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  nav: {
    backgroundColor: '#EBF3F5',
    textAlign: 'right',
  },
  waves: {
    backgroundColor: '#EBF3F5',
  },
  body: {
    flexGrow: 1,
    backgroundColor: '#002C41',
  },
  instructions: {
    // probably something to center it idek
  },
  iconContainer: {
    margin: '1em',
  },
  drawer: {
   backgroundColor: '#EBF3F5',
  },
}

export const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  
  };

  let susTask = returnTask(Tasks_Sustainability);
  let eduTask = returnTask(Tasks_Education);
  let actTask = returnTask(Tasks_Action);

  const list = () => (
    <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <IconButton>
        <ArrowForwardIosIcon 
          onClick={toggleDrawer(false)}
          style={{color: '#002C41'}}
        />
        </IconButton>
      <TaskCard list={susTask}></TaskCard>
      <TaskCard list={eduTask}></TaskCard>
      <TaskCard list={actTask}></TaskCard>
    </div>
  )


  return(
    <div style={styles.home}>
      <div style={styles.nav}>
        <IconButton onClick={toggleDrawer(true)} style={styles.iconContainer}>
          <AppsIcon style={{...styles.appIcon, ...{color: '002C41'}}} fontSize='large'/>
        </IconButton>
        <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} style={styles.drawer}>
          {list()}
        </Drawer>
      </div>
      <img src={waves} style={styles.waves}/>
      <div style={styles.body}>
        <img src = {instructions} style={styles.instructions}/>
      </div>
    </div>
  );
};
