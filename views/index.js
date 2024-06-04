import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import nunjucks from 'nunjucks'
import axios from 'axios'


const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmJkMDdlNjdlNmM4MGYzOWVkMDkwYjRhNjk4OTBkOSIsInN1YiI6IjY2NWI4OTI2OWYyYzIxOTY3M2U3NmNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmjEnue_YOIyilqwU6m-ppycnbWCP2s_SlL_ZYWf0aU'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));



const button = document.querySelector('#button');
button.addEventListener('click', () => {
    console.log('click')
})

