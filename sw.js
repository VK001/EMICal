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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "animate.css",
    "revision": "346964e149ad49ccf4f3da77b66fa086"
  },
  {
    "url": "app.js",
    "revision": "0c314a8f4238e6cafffb1f633c790493"
  },
  {
    "url": "icons/lc-128.png",
    "revision": "541b14c41c86f6407a2e975dc56accd1"
  },
  {
    "url": "icons/lc-144.png",
    "revision": "9b6348053efa971af088bd8cd0a6fd7e"
  },
  {
    "url": "icons/lc-196.png",
    "revision": "f9f8fad43e1bb4d75f87d14bd23e9cf5"
  },
  {
    "url": "icons/lc-256.png",
    "revision": "48762528fe48813957e79e56ea3e49c5"
  },
  {
    "url": "icons/lc-32.png",
    "revision": "334349df6865498a2263f007ac746b0c"
  },
  {
    "url": "icons/lc-48.png",
    "revision": "c227a6831375a93db62f41bdca67b8f6"
  },
  {
    "url": "icons/lc-96.png",
    "revision": "e01ae0574afb7af1105a46e390091e53"
  },
  {
    "url": "img/loading.gif",
    "revision": "1b1a27ca8cc684cea5b9c28f179b09f6"
  },
  {
    "url": "index.html",
    "revision": "f829ae67b0201cf2299b9c92c23377b8"
  },
  {
    "url": "manifest.json",
    "revision": "005e8efdb104fa37604fe9cfb180bab1"
  },
  {
    "url": "vk.jpg",
    "revision": "7e957ced322e102421747d6f8d8a2b29"
  },
  {
    "url": "workbox-config.js",
    "revision": "a27e966edd2128a8ec9b7818db84d0ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
