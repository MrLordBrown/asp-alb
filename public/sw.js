/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0.png",
    "revision": "65c54d662be97de44e793559568ea22c"
  },
  {
    "url": "01-Stabalize.mp3",
    "revision": "ae7293272e32057bebf6e718a0869a6e"
  },
  {
    "url": "02-Asterix.mp3",
    "revision": "4cf233f649a4ff9b94116628cb3b264d"
  },
  {
    "url": "03-Aloha.mp3",
    "revision": "d206434a0ce400fd4d96ba9cef3202ea"
  },
  {
    "url": "04-QueenOfTheSky.mp3",
    "revision": "293a92f06de446d98bef383678602426"
  },
  {
    "url": "05-QueenOfTheMoon.mp3",
    "revision": "6b85bae85002828ae830bc3ca3a3666b"
  },
  {
    "url": "06-SonOfTheEarth.mp3",
    "revision": "cc47000cc62f7cea81a1805a1c2b8509"
  },
  {
    "url": "07-Asphalt.mp3",
    "revision": "474698c1ace98f9beaa2d82948783501"
  },
  {
    "url": "08-GardenWitch.mp3",
    "revision": "8a5e99d8e52083eff2804c00d15f1b08"
  },
  {
    "url": "09-AbnormalListeningBehavior.mp3",
    "revision": "27e284f990f0939a620d3cd50c18b16b"
  },
  {
    "url": "1.png",
    "revision": "6c8c61e79280cd970b03b6140adc4737"
  },
  {
    "url": "2.png",
    "revision": "81fe09e8d94614e2b37aca78df1a059e"
  },
  {
    "url": "3.png",
    "revision": "50ef33a6860ef515731e4ad8d896d85d"
  },
  {
    "url": "4.png",
    "revision": "ab59681329de599f329bd632848227f8"
  },
  {
    "url": "5.png",
    "revision": "6bf9709f8a2305002dd0af23d9e2bfa0"
  },
  {
    "url": "6.png",
    "revision": "1542ee9220af552757d36a28f9a1802a"
  },
  {
    "url": "7.png",
    "revision": "8c60ed2457e81b6d5cf3310ac9804472"
  },
  {
    "url": "8.png",
    "revision": "fa98fb9271fffb72965e892df98af85d"
  },
  {
    "url": "9.png",
    "revision": "4af6b6706a4920e30d02a88261c19999"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "5e2fc9f1895f1edd8791b8b74e80fb7e"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "e676b1b3af03f851846f28c183d21320"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "edd7510ae922ca38966541b873d81445"
  },
  {
    "url": "asplogo-512x512.png",
    "revision": "b21c2b83596f5ca822599613e06cdb63"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "dbffe0eb0da0f429e2828364d5bab08e"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "d8ddf8e3c8f80ce1bef4e1bda2fd5bc6"
  },
  {
    "url": "favicon.ico",
    "revision": "92d1be81eb1aeec5e4c1a0b2de148388"
  },
  {
    "url": "feed.rss",
    "revision": "4c5cba2b82994c0f73796dd62164498b"
  },
  {
    "url": "ff.png",
    "revision": "8ff29016bdc61a09eef1df6ad96d5915"
  },
  {
    "url": "icon-hdpi.png",
    "revision": "7a70d55cc5574b47a5d4d594ab7d56bf"
  },
  {
    "url": "icon-ldpi.png",
    "revision": "f01fe8c7d21296310869078e501efbea"
  },
  {
    "url": "icon-mdpi.png",
    "revision": "bd56e8b3bd83364666a81d0aee8c8997"
  },
  {
    "url": "icon-xhdpi.png",
    "revision": "b1c561931814bec278ee60b15322fee3"
  },
  {
    "url": "icon-xxhdpi.png",
    "revision": "9bd7946651fe07915a52a3fe48242091"
  },
  {
    "url": "icon-xxxhdpi.png",
    "revision": "19f69c65f0c5015e8139c61933158968"
  },
  {
    "url": "index.html",
    "revision": "fa7ea5b86d999d759c5bfbbf4106bc4b"
  },
  {
    "url": "inst.png",
    "revision": "0e84d5926187e7a3b785febd3a55bf1d"
  },
  {
    "url": "install.png",
    "revision": "608e391775baa3ab27f50e0f2f840da6"
  },
  {
    "url": "mail.png",
    "revision": "92b817f2e3adc3a9fbd3975951dfce92"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "3020070f2367249155c0c83df0190400"
  },
  {
    "url": "mute.png",
    "revision": "c2512548b853d31385cafbb38d431243"
  },
  {
    "url": "pause.png",
    "revision": "f55317acb8f0f688eabb0fdf737478e1"
  },
  {
    "url": "play.png",
    "revision": "5a9f2d08f11dc631e372fafd8f2236b6"
  },
  {
    "url": "rss.gif",
    "revision": "4f1a6fe5b219673b2644bd22c3713016"
  },
  {
    "url": "rw.png",
    "revision": "2c967a0364b8a68141d41193a48d1ff5"
  },
  {
    "url": "screen-hdpi-landscape.png",
    "revision": "439965be98b97e0828b711e7d95dc1c0"
  },
  {
    "url": "screen-hdpi-portrait.png",
    "revision": "0f0f23c356843e2428edcccb192c0cc2"
  },
  {
    "url": "screen-ldpi-landscape.png",
    "revision": "d103cb981a80ee7b0ce2c82242f1d03b"
  },
  {
    "url": "screen-ldpi-portrait.png",
    "revision": "1d6467027dd8dc7a9d7e579e2a1ff2cb"
  },
  {
    "url": "screen-mdpi-landscape.png",
    "revision": "adc4ea32340581e7987bc8b494f37f64"
  },
  {
    "url": "screen-mdpi-portrait.png",
    "revision": "5807a435a14d55301b1000c009287a56"
  },
  {
    "url": "screen-xhdpi-landscape.png",
    "revision": "04da304f59588aaf58c9dd20ba219659"
  },
  {
    "url": "screen-xhdpi-portrait.png",
    "revision": "6b01d799629415762a51a288ada3bb72"
  },
  {
    "url": "screen-xxhdpi-landscape.png",
    "revision": "19c09175e034572598e6e109cb588d37"
  },
  {
    "url": "screen-xxhdpi-portrait.png",
    "revision": "727eb0c3143318eced0640ec77282da6"
  },
  {
    "url": "screen-xxxhdpi-landscape.png",
    "revision": "0ffc0642300f8acf80b264c0128a0cfe"
  },
  {
    "url": "screen-xxxhdpi-portrait.png",
    "revision": "f95eb125284a9d17f3e7a14d2081f487"
  },
  {
    "url": "scripts.js",
    "revision": "35eb9054defffd3624f80438f80fc79f"
  },
  {
    "url": "site.webmanifest",
    "revision": "591c145e7ea3859ea387173fefd03471"
  },
  {
    "url": "splash.png",
    "revision": "cc1f2933c55d8ae68c06c1ae9e96a2db"
  },
  {
    "url": "sw-register.js",
    "revision": "7128cfe9ea69c9058d2dcf29fa3c798a"
  },
  {
    "url": "thumb.png",
    "revision": "9924e12fd6fdde665381306239151de2"
  },
  {
    "url": "thumbs.png",
    "revision": "de98c0363ef81dacb7636279b11586bd"
  },
  {
    "url": "unmute.png",
    "revision": "bbae1450626f060516b3c3c9ba3fa23c"
  },
  {
    "url": "workbox-build.js",
    "revision": "f7f2d8c47f5a1bcc35ef734985b22192"
  },
  {
    "url": "workbox-config.js",
    "revision": "e79f92149b80dcfe6df8d4f15013a799"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
