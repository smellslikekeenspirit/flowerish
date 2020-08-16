import React, {useState} from 'react';
import {Typography, Drawer, Button} from '@material-ui/core';
import waves from '../../assets/waves.png';
import {TaskCard} from '../../components/taskCard.js';
import {Tasks_Sustainability, Tasks_Education, Tasks_Action, returnTask} from '../../components/tasks.js';

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

  let susTask = returnTask(Tasks_Sustainability);
  let eduTask = returnTask(Tasks_Education);
  let actTask = returnTask(Tasks_Action);

  const list = (anchor) => (
    <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <TaskCard props={susTask}></TaskCard>
      <TaskCard props={eduTask}></TaskCard>
      <TaskCard props={actTask}></TaskCard>
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
