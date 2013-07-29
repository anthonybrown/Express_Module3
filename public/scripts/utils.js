function log(message) {
  'use strict';
  console.log(message);
}

function dialog(message) {
  'use strict';
  alert('Attention \n\n '+ message);
}

function write(msg) {
  document.getElementById('output').innerHTML += msg + '<br />';
}


function message(msg) {
  document.getElementById('message').innerHTML += msg + '<br />';
}
