import axios from "axios";

export default {
  //get memes

  getMemes() {
    return axios.get("https://swapi.dev/api/people/1").then(response => {
      return response.data;
    });
  }

  //post memes

  //update meme
};
