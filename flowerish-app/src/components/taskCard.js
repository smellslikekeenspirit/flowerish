import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {observer} from 'mobx-react';
import { user } from '../state/User';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: '5%',
    },
    media: {
      height: 140,
    },
    goButton: {
      backgroundColor: '#78A1BB',
      width: '50%',
    },
    doneButton: {
      backgroundColor: '#002C41',
      color: '#EBF3F5',
      width: '50%',
    },
    link: {
      textDecoration: 'none',
      color: 'white'
    }
  });
  

  export const TaskCard = observer((props) => {
    const classes = useStyles();
    const list = props.list;

    const handleDone = () => {
      user.updateFish();
    }
    
    return (
      <Card className={classes.root}> 
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require(`../assets/${list.imageSrc}`)}
            title={list.imageTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {list.taskTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {list.taskDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={classes.doneButton} onClick={handleDone}>+ fish</Button>
          <Button className={classes.goButton}>
            <Link href={list.url} className={classes.link}>
                <span>Go</span>
            </Link>
          </Button>
        </CardActions>
      </Card>
    );
  });