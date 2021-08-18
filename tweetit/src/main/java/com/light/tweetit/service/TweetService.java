package com.light.tweetit.service;

import com.light.tweetit.model.Tweet;

import java.util.List;

public interface TweetService {
    public List<Tweet> fetchTweetsOfOtherAuthors(String excludeAuthor);
    public List<Tweet> fetchTweetsByAuthor(String author);
    public Tweet saveTweet(Tweet tweet);
}
