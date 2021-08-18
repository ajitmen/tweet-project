package com.light.tweetit.repository;

import com.light.tweetit.model.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TweetRepository extends JpaRepository<Tweet, Long> {

    public List<Tweet> findTweetByAuthor(String author);
    public List<Tweet> findTweetByAuthorNot(String author);
}
