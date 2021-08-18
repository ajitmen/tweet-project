package com.light.tweetit.service;

import com.light.tweetit.model.Tweet;
import com.light.tweetit.repository.TweetRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TweetServiceImpl implements TweetService{
    TweetRepository tweetRepository;

    public TweetServiceImpl(TweetRepository tweetRepository) {
        this.tweetRepository = tweetRepository;
    }

    @Override
    public List<Tweet> fetchTweetsOfOtherAuthors(String excludeAuthor) {
        return tweetRepository.findTweetByAuthorNot(excludeAuthor);
    }

    @Override
    public List<Tweet> fetchTweetsByAuthor(String author) {
        return tweetRepository.findTweetByAuthor(author);
    }

    @Override
    public Tweet saveTweet(Tweet tweet) {
        return tweetRepository.save(tweet);
    }
}
