// Import stylesheets
import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

var FRAMES = 1329;
var FPS = 60;
var video = document.getElementById('video');

window.addEventListener('scroll', function (e) {
  var time = ((window.scrollY / 1000) * FRAMES) / FPS;
  if (video.currentTime) video.currentTime = time;
  console.log(time);
  // alert('Hizo scroll')
});

window.addEventListener('load', function (e) {
  video.pause();
  video.currentTime = 0;
});
