import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID 1ukgpv-8ju2FjFZfOHqlL6gN_KEG2vrOyncYDOx9J_g'
  }
})