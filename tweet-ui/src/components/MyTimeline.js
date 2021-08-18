import React, { useState, useEffect } from "react";
import TweetService from "../services/tweet.service";
import TweetCards from "./TweetCards";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import TweetForm from "./TweetForm";

const MyTimeline = (props) => {
  const [tweets, setContent] = useState("");

  useEffect(() => {
    TweetService.getUserTweet().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

          setContent(_content);
      }
    );
  }, []);

  

  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
    {TweetForm(props)}
      <Divider />
      <br></br>
      <h3>My Timeline</h3>
      {TweetCards(tweets)}
      </Container>
    </React.Fragment>
  );
};

export default MyTimeline;
