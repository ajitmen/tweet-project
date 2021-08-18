import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://tweet.gonova.uk/api/";


const getUserTweet = () => {
  return axios.get(API_URL + "user/mytweets", { headers: authHeader() })
  
};

const getOthersTweet = () => {
  return axios.get(API_URL + "user/tweets", { headers: authHeader() })
};

const saveTweet = (message) => {
  return axios
    .post(API_URL + "user/mytweets", {
      message,
    },{ headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};



export default {
  getUserTweet,
  getOthersTweet,
  saveTweet,
};
