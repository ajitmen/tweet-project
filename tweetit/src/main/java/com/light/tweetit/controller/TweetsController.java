package com.light.tweetit.controller;

import com.light.tweetit.model.Tweet;
import com.light.tweetit.payload.request.TweetRequest;
import com.light.tweetit.service.TweetService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@Tag(name = "Tweets")
public class TweetsController {

    TweetService tweetService;

    @Autowired
    public TweetsController(TweetService tweetService) {
        this.tweetService = tweetService;
    }

    @GetMapping("/tweets")
    @PreAuthorize("hasRole('USER')")
    public List<Tweet> fetchTweetsOfOtherUsers(){
        List<Tweet> tweets = tweetService.fetchTweetsOfOtherAuthors(getLoggedInUser());
        Collections.reverse(tweets);
        return tweets;
    }

    @GetMapping("/mytweets")
    @PreAuthorize("hasRole('USER')")
    public List<Tweet> fetchTweetsByLoggedInUser(){
        List<Tweet> tweets = tweetService.fetchTweetsByAuthor(getLoggedInUser());
        Collections.reverse(tweets);
        return tweets;
    }

    @PostMapping("/mytweets")
    @PreAuthorize("hasRole('USER')")
    public Tweet saveTweetsByLoggedInUser(@Valid @RequestBody TweetRequest tweetRequest){
        Tweet tweet = new Tweet();
        tweet.setAuthor(getLoggedInUser());
        tweet.setMessage(tweetRequest.getMessage());
        return tweetService.saveTweet(tweet);
    }

    public String getLoggedInUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return  authentication.getName();
    }
}
