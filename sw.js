self.addEventListener( 'install', function ( event ) {
    var CACHE_NAME = 'Vayaterra-cache-v1';
    var urlsToCache = [
        '/',
        'css/material.min.css',
        'css/style.min.css',
        'js/material.min.js',
        'index.html',
        'home.html'
    ];
    event.waitUntil(
        caches.open( CACHE_NAME )
        .then( function ( cache ) {
            console.log( 'Opened cache' );
            return cache.addAll( urlsToCache );
        } )
    );
} );
self.addEventListener('activate', event => {
  console.log('V1 now ready to handle fetches!');
});
self.addEventListener( 'fetch', function ( event ) {
    event.respondWith(
        caches.match( event.request )
        .then( function ( response ) {
            if ( response ) {
                return response;
            }
            return fetch( event.request );
        } )
    );
} );
