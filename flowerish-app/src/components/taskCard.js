import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
/*import {  TwitterShareButton, TwitterIcon} from "react-share";
import { Link } from 'react-router-dom';*/


function GoButton (props) {
    return (
      <div>
        <Button>
        <Link to = {props.url}>
            <span>Go</span>
        </Link>
        </Button>
      </div>
    );
}


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

  export const TaskCard = (props) => {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}> 
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= {props.imageSrc}
            title= {props.imageTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.taskTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.taskDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>

            <Button size="medium">
              YO
            </Button>
          
            <GoButton url={props.url}></GoButton>

          
        </CardActions>
      </Card>
    );
  }