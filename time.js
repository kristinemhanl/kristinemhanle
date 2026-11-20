/* 
   Kristine Le Personal Webpage
   Filename: time.js

   Author: Kristine Le
   Date: 07/10/2025
*/

function currentTime() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById('currentTime').innerHTML = t;
}

currentTime();
setInterval(currentTime, 1000);