import axios from "axios";

const baseURL = "https://api.github.com/users/DavinJ-0316/repos";

const fetchRepos = axios.create({
  baseURL,
});

export default fetchRepos;

// fetchRepos.get("", {});
