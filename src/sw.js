/*

*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded `);

  workbox.precaching.precacheAndRoute([]);

} else {
  console.log(`Boo! Workbox didn't load `);
}
