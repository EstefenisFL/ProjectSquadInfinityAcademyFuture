import axios from "axios";

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
