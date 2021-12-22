import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default {
  user: {
    login: (credentials) =>
      axios.post("backend/login", { credentials }).then((res) => {
        console.log("Hey", res.data.user);
        return res.data.user;
      }),

    signup: (user) =>
      axios.post("backend/signup", { user }).then((res) => {
        console.log("Test", res.data.user);
        return res.data.user;
      }),
  },
};

//export default api;
