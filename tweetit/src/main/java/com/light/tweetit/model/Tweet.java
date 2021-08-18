package com.light.tweetit.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tweets")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Tweet {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Tweet message should not be empty")
    @Size(min=3, max = 160, message = "A tweet message should be between 3 and 160 characters")
    private String message;

    @NotEmpty(message = "Author is required")
    private String author;

}
