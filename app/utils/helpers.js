import axios from 'axios' //import insteat of    var axios = require('axios');

function getRepos(username){
  return axios.get(`http://api.github.com/users/${username}/repos`); //ES6 bactick instead of '' + ''
};


function getUserInfo(username){
  return axios.get(`http://api.github.com/users/${username}`);
};



export default function getGithubInfo(username){
    //axios.all takes an array of axios promises and execute the then only when all the calls have been made
    return axios.all([getRepos(username), getUserInfo(username)])
      .then((arr) => ({repos: arr[0].data, bio: arr[1].data})) //ES6 arrow function:
        // automatically bind THIS context to it since its on one line we can skip the return keyword
      /* same as:
        .then(function(arr){
          return {
          repos: arr[0].data,
          bio: arr[1].data
        }
        });
      */
}