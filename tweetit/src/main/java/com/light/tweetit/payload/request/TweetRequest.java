package com.light.tweetit.payload.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
public class TweetRequest {
    @NotBlank
    @Size(min = 3, max = 160)
    private String message;
}
