import axios from "axios";

export default {
  getEmployees: function() {
    return axios.get('https://randomuser.me/api/?inc=gender,name,picture&results=24');
  }
};