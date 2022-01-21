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
  /* thread: {
    createThread: (details) =>
      axios
        .post("backend/newthread", { details })
        .then((res) => res.data.thread),
    editThread: (details) =>
      axios
        .put("/backend/editthread", { details })
        .then((res) => res.data.thread),
    deleteThread: (threadId) =>
      axios
        .delete(`/backend/deletethread/${threadId}`)
        .then((res) => res.data.message),
  },
  comment: {
    createComment: (details) =>
      axios
        .post("/backend/newcomment", { details })
        .then((res) => res.data.comment),
    editComment: (details) =>
      axios
        .put("/backend/editcomment", { details })
        .then((res) => res.data.comment),
    deleteComment: (commentId) =>
      axios
        .delete(`/backend/deletecomment/${commentId}`)
        .then((res) => res.data.message),
  },

  conection: { 
    setBaseUrl: () =>
    axios
    .create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  }),
  },*/
  
  actions: {
    getAllUsers: () =>
    axios.get('http://localhost:5000/api/v1/user/').then((res) => {
      console.log("Get All Works", res.data);
      return res.data;
  }),
  getUserById: (id) =>
    axios.get('http://localhost:5000/api/v1/user/'+id).then((res) => {
      console.log("Get All Works", res.data);
      return res.data;
  }),
  createUser: (data) =>
    axios.post('http://localhost:5000/api/v1/user/', data).then((res) => {
      console.log("Create User With Success", res);
      return res;
  }),
  }
};

/*import axios from "axios";

 const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;*/
