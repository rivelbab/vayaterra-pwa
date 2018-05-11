/*

*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded `);

  workbox.precaching.precacheAndRoute([
  {
    "url": "css/bootstrap.min.css",
    "revision": "d8ab09baf9f602e4775cd9bf766e2887"
  },
  {
    "url": "css/fakeLoader.css",
    "revision": "3bf05ab86fc1debae854d21d5a74ad15"
  },
  {
    "url": "css/magnific-popup.css",
    "revision": "30b593b71d7672658f89bfea0ab360c9"
  },
  {
    "url": "css/materialize.css",
    "revision": "0c0e60bcb3ffbf8b056aad58ddca1691"
  },
  {
    "url": "css/mdb.min.css",
    "revision": "cfa12efabec62613a3272fbe0ae61693"
  },
  {
    "url": "css/normalize.css",
    "revision": "5743a1a1d31e36b25475d22bf64166e5"
  },
  {
    "url": "css/owl.carousel.css",
    "revision": "4f98656d288c6b7c14b613ac938d5d8b"
  },
  {
    "url": "css/owl.theme.css",
    "revision": "a414b0e69c03b624b801b5e6c373e7fb"
  },
  {
    "url": "css/owl.transitions.css",
    "revision": "b1bdaeac4065bf67a7d7a06213192964"
  },
  {
    "url": "css/style.css",
    "revision": "927c9f9e10f7b34e4821e837fd5d6efd"
  },
  {
    "url": "font-awesome/css/font-awesome.min.css",
    "revision": "5703aca5ba6fe02691b61b471b80b846"
  },
  {
    "url": "index.html",
    "revision": "d93bea6abdfdd8e4a33a203bdc7d8f95"
  },
  {
    "url": "js/animation.js",
    "revision": "8952a6ec2786e6e8d62a7934bc7f1c1f"
  },
  {
    "url": "js/bootstrap.min.js",
    "revision": "ce6e785579ae4cb555c9de311d1b9271"
  },
  {
    "url": "js/contact-form.js",
    "revision": "dcf141b4bd12ae675ef66a58f5b4162e"
  },
  {
    "url": "js/fakeLoader.min.js",
    "revision": "942fcc3afe0b0720ea7a7c8b330030a5"
  },
  {
    "url": "js/jquery.filterizr.js",
    "revision": "3f48e2f3aa5fbd80dbdcf7d0860eeec9"
  },
  {
    "url": "js/jquery.magnific-popup.min.js",
    "revision": "ba6cf724c8bb1cf5b084e79ff230626e"
  },
  {
    "url": "js/jquery.min.js",
    "revision": "2f6b11a7e914718e0290410e85366fe9"
  },
  {
    "url": "js/main.js",
    "revision": "df08fa2bee3bffab65b9f266943fa1ae"
  },
  {
    "url": "js/materialize.min.js",
    "revision": "f602049ecde9f5a9e11f80afb62baaba"
  },
  {
    "url": "js/mdb.min.js",
    "revision": "d92fabcc57b1a43696eb870f8e8cdebd"
  },
  {
    "url": "js/owl.carousel.min.js",
    "revision": "88d0fe722f04973e2888b58a63aa0570"
  },
  {
    "url": "js/popper.min.js",
    "revision": "6cd956453e307bfd2ce4bfb0648b9f7d"
  },
  {
    "url": "js/portfolio.js",
    "revision": "256d415aaf152a1c2d0b3c7688f23665"
  },
  {
    "url": "img/slide2.jpg",
    "revision": "e3e6e1a8dd26a6499bc8a984e5da4eaf"
  },
  {
    "url": "img/acceuil.png",
    "revision": "aa342236dc51a38e0ec2a37e8c6c6c3c"
  },
  {
    "url": "img/favicon.png",
    "revision": "588ee2ce864e60f16ba1519778141d24"
  },
  {
    "url": "img/icon.png",
    "revision": "107252a15dcbf34b75988e1199bcf346"
  },
  {
    "url": "img/ios-icon.png",
    "revision": "107252a15dcbf34b75988e1199bcf346"
  },
  {
    "url": "img/launcher-icon-1x.png",
    "revision": "f4af9ab876f84baf79e3c44dd8cd5f1f"
  },
  {
    "url": "img/launcher-icon-2x.png",
    "revision": "0ee43d238728166da3995306fb2c65cf"
  },
  {
    "url": "img/launcher-icon-4x.png",
    "revision": "107252a15dcbf34b75988e1199bcf346"
  },
  {
    "url": "img/login-bg.png",
    "revision": "1125341d17f170fb967917cfd9fcc662"
  },
  {
    "url": "img/logo.png",
    "revision": "3ff7b7db36b5fa5d35b38123724cdcc9"
  },
  {
    "url": "img/logo2.png",
    "revision": "d0c986d3110d1997e495724b360f9aa1"
  },
  {
    "url": "img/logob.png",
    "revision": "d0c986d3110d1997e495724b360f9aa1"
  },
  {
    "url": "img/touch/apple-touch-icon.png",
    "revision": "f9c99d23e0587799544877fb6d4a34f9"
  },
  {
    "url": "img/touch/chrome-touch-icon-192x192.png",
    "revision": "107252a15dcbf34b75988e1199bcf346"
  },
  {
    "url": "img/touch/chrome-touch-icon-512x512.png",
    "revision": "ea385513fcae90ae3528726e1988efd5"
  },
  {
    "url": "img/touch/icon-128x128.png",
    "revision": "a0312ba824fcfbeef5679cc33805397b"
  },
  {
    "url": "img/touch/icon-128X128.png",
    "revision": "a0312ba824fcfbeef5679cc33805397b"
  },
  {
    "url": "img/touch/ms-touch-icon-144x144-precomposed.png",
    "revision": "06247b25dbf50a3b784433c292a4f1d7"
  },
  {
    "url": "img/welcome.png",
    "revision": "9987ed8ba44c31ffd638e86d1c39f82f"
  },
  {
    "url": "font-awesome/fonts/fontawesome-webfont5b62.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  }
]);

} else {
  console.log(`Boo! Workbox didn't load `);
}
