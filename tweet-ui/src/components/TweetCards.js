import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(4),
  },
  media: {
    height: 90,
  },
}));

function Media(props) {
  const tweet = props.tweet;  
  const classes = useStyles();

  return (
    <Card className={classes.card} >
      <CardHeader
        avatar={
           (
            <Avatar alt="Remy Sharp" src="" />
          )
        }
        action={
         (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={tweet.author}
         
        subheader={'5 hours ago'}
      />
     
        <CardMedia
          className={classes.media}
          image="https://cdn.vox-cdn.com/uploads/chorus_image/image/65962962/twitter.0.0.png"
          title="Minimal Features"
        />
     

      <CardContent>
        {(
          <Typography variant="body2" color="textSecondary" component="p">
              {tweet.message}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

Media.propTypes = {
  tweet: PropTypes.object,
};

export default function TweetCards(tweets) {
  return (
    <div>
      
        {tweets &&
          tweets.map((tweet, index) =>  <Media key={tweet.id} tweet={tweet}/>)}
      
      
    </div>
  );
}