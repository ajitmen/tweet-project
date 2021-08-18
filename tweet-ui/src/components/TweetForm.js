import React, { useState,useRef } from "react";
import TweetService from "../services/tweet.service";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



const TweetForm = (props) => {
  const classes = useStyles();
  
  const form = useRef();
  const [tweet, setTweet] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");


  const onChangeTweet = (e) => {
    const tweet = e.target.value;
    setTweet(tweet);
  };

  const handleTweet = (e) => {
    e.preventDefault();

    setSuccessful(false);
      TweetService.saveTweet(tweet).then(
        (response) => {
          setMessage("Tweet Posted");
          setSuccessful(true);
          props.history.push("/mytimeline");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            setMessage(resMessage);
            setSuccessful(false);
        }
      );
    
  };

  return (
    <form className={classes.root} onSubmit={handleTweet} ref={form}>
      <TextField id="outlined-basic" label="Tweet Here" name ="tweet" variant="outlined" onChange={onChangeTweet}/>
      <input type="submit" value="Submit" style={{marginTop: 2 + 'em'}} />
      {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
    </form>
  );
} 

export default TweetForm;
