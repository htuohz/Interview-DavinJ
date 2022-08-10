import axios from "axios";

const baseURL = "https://api.github.com/emojis";

const fetchEmojies = axios.create({
  baseURL,
});

export default fetchEmojies;
