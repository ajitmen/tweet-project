import React, { useState, useEffect } from "react";
import TweetService from "../services/tweet.service";
import TweetCards from "./TweetCards";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import TweetForm from "./TweetForm";


const HomeTimeline = (props) => {
  const [tweets, setContent] = useState("");
  
  useEffect(() => {
    TweetService.getOthersTweet().then(
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

    <Container maxWidth="sm">
      {TweetForm(props)}
      <Divider />
      <br></br>
      <h3>Home Timeline</h3>
      {TweetCards(tweets)}
      </Container>
    </React.Fragment>
  );
};

export default HomeTimeline;
