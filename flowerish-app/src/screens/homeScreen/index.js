import React, {useState} from 'react';
import {Drawer, IconButton, Dialog, DialogActions, DialogTitle, DialogContent, Button, Typography} from '@material-ui/core';
import waves from '../../assets/waves.png';
import turtle from '../../assets/turtle.png'
import fishImg from '../../assets/fish.png'
import {TaskCard} from '../../components/taskCard.js';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Tasks_Sustainability, Tasks_Education, Tasks_Action, returnTask} from '../../components/tasks.js';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';
import { user } from '../../state/User';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#EBF3F5',
  }
}));

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
  turtle: {
    width: '20%',
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  iconContainer: {
    margin: '1em',
  },
  flourishBut: {
    width: '100%',
    backgroundColor: '#78A1BB',
    color: 'white',
  },
  fish: {
    width: '5%',
    position: 'absolute',
  }
}

export const HomeScreen = observer(() => {
  const classes = useStyles();
  const [dialog, setDialog] = useState(true);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleClose = () => {
    setDialog(false);
  }

  const fish=[];
  const generateFish = () => {
    let x, y = 0;
    for(let i = 0; i < user.fish; i++) {
      do {
        y = Math.floor(Math.random()*80) + 10;
      } while(y > 50 && y < 70);
      do {
        x = Math.floor(Math.random()*80) + 10;
      } while(x < 30);
      fish.push(
        <img src={fishImg} style={{...styles.fish, ...{top: `${x}%`, left: `${y}%`}}}/>
      )
    }
    console.log(fish);
    return fish;
  }

  let susTask = returnTask(Tasks_Sustainability);
  let eduTask = returnTask(Tasks_Education);
  let actTask = returnTask(Tasks_Action);

  const list = (anchor) => (
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
        <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} classes={{paper: classes.card}}>
          {list(open)}
        </Drawer>
      </div>
      <img src={waves} style={styles.waves}/>
      <div style={styles.body}>
        <Dialog onClose={handleClose} open={dialog}>
          <DialogTitle>let's do and learn</DialogTitle>
          <DialogContent>
            Turtle is lonely :( Click on the icon 
            in the top right hand corner to give turtle some friends 
            while practicing sustainability
            and learning about environmentalism! 
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={styles.flourishBut}>let's go</Button>
          </DialogActions>
        </Dialog>
        <img src={turtle} style={styles.turtle}/>
        {generateFish()}
      </div>
    </div>
  );
});
