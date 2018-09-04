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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9e9731d924fd9a7e85d4d5c44b2e7bf8"
  },
  {
    "url": "assets/css/0.styles.c36b8cb0.css",
    "revision": "242e7405ad295ce72e613aeab39f853b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8a605415.js",
    "revision": "4b962819d619b34c3f0f3c2bf638e3df"
  },
  {
    "url": "assets/js/11.e3eb00a9.js",
    "revision": "bb37ce888e03995c09b35ba56b20e346"
  },
  {
    "url": "assets/js/12.8f206e28.js",
    "revision": "4d21b8c7d6db5aa3ff3d5320c99fbf27"
  },
  {
    "url": "assets/js/13.5ba4d64e.js",
    "revision": "e97a82d9c84c4968dc0595bc28604d34"
  },
  {
    "url": "assets/js/14.68fd4a45.js",
    "revision": "f8f6fca355a8e1fe24b6e5b79b4f26d5"
  },
  {
    "url": "assets/js/15.fe7fbca8.js",
    "revision": "653ab3e9b02505eaf765edcdd8eeb1bd"
  },
  {
    "url": "assets/js/16.fb49d9be.js",
    "revision": "69244f0859d3429e391fe9818e264c30"
  },
  {
    "url": "assets/js/17.2f9151af.js",
    "revision": "028a9549854f0184be839e2c448ae086"
  },
  {
    "url": "assets/js/18.7aa4f9d2.js",
    "revision": "e516f96768b325cf35a6fb791f4a7eaf"
  },
  {
    "url": "assets/js/19.ff10c48e.js",
    "revision": "fc66ec10b4d10de1cdb0249e28afe93f"
  },
  {
    "url": "assets/js/2.da912442.js",
    "revision": "637eebfb2d652fe074e54e32accd495d"
  },
  {
    "url": "assets/js/20.e7b4665e.js",
    "revision": "fc1ed36471b31a57bc2077e920d89af9"
  },
  {
    "url": "assets/js/21.7dfe5b50.js",
    "revision": "5622108fdcaffb9b8c410e6bfcd579cf"
  },
  {
    "url": "assets/js/22.16936ca7.js",
    "revision": "2c4ad52f15c49075a0388a5eccc029d0"
  },
  {
    "url": "assets/js/23.abe4743c.js",
    "revision": "ab6a7840e6b980756073509778517eb6"
  },
  {
    "url": "assets/js/24.eaabdbd9.js",
    "revision": "27519eb3f8962aa73b653e318db11fcd"
  },
  {
    "url": "assets/js/3.08661987.js",
    "revision": "1bc9dd821bca6ad7abb48342cb74f410"
  },
  {
    "url": "assets/js/4.a53258df.js",
    "revision": "fa179c1b3c8bf569e9373fd592728f7e"
  },
  {
    "url": "assets/js/5.d976191e.js",
    "revision": "e4ca9918315d7461f83b2d17afb9b111"
  },
  {
    "url": "assets/js/6.47a0ba06.js",
    "revision": "78618a7eaeda07d6e6f0e81d59b08fd4"
  },
  {
    "url": "assets/js/7.2a35bf25.js",
    "revision": "8ce26ae0754394347b7cd2ffc56262a5"
  },
  {
    "url": "assets/js/8.f925f90b.js",
    "revision": "6efe16c2ab2c5921951a1c6d912116f0"
  },
  {
    "url": "assets/js/9.b25e8014.js",
    "revision": "6e4c45d47567e4b3d6166fbeafe853f4"
  },
  {
    "url": "assets/js/app.a877be87.js",
    "revision": "5f9a7d038650a6de088792a0ec3cec20"
  },
  {
    "url": "en/index.html",
    "revision": "560a9a0b439844a77376ef2115df8a02"
  },
  {
    "url": "gecko-blue@3x.png",
    "revision": "cac18566f2e395d2cd628fac980aee58"
  },
  {
    "url": "gecko-logo@3x.png",
    "revision": "b0823065327e11c635ff46ff49c601f8"
  },
  {
    "url": "guide/dns-over-https.html",
    "revision": "9105537a614f5e12dabf503f1609205d"
  },
  {
    "url": "guide/hyperv-openwrt.html",
    "revision": "87b523db4ebaa5b387c4438879a1039d"
  },
  {
    "url": "guide/index.html",
    "revision": "4f2074a13357d784aebe13847a7450e0"
  },
  {
    "url": "guide/koolshare-merlin.html",
    "revision": "945374041f23693436b13f6628f21f46"
  },
  {
    "url": "guide/koolshare-openwrt.html",
    "revision": "3167dbfb41bf5745fe0c817bb831eb11"
  },
  {
    "url": "guide/list.html",
    "revision": "fb5d3b4b75bbe58c8d34a132fee3f032"
  },
  {
    "url": "guide/quantumult.html",
    "revision": "5da043995c25775125928e4e37e360a2"
  },
  {
    "url": "guide/shadowrocket.html",
    "revision": "d94c0b8edfd6e84afa523f430ea9e540"
  },
  {
    "url": "guide/ssr-c-sharp.html",
    "revision": "4e7dddde016369a8b9f86e37d751ca25"
  },
  {
    "url": "guide/ssr-for-android.html",
    "revision": "8fc16e0749eb88bfc797d1f85aa9cdea"
  },
  {
    "url": "guide/sstap.html",
    "revision": "6b6cbb1f8812596335b24d2293bcc387"
  },
  {
    "url": "guide/ssx-ng-r.html",
    "revision": "88afeb582eba38723c4e9f366511c640"
  },
  {
    "url": "guide/surge-2.html",
    "revision": "240acabe47d6435e5e47a70446f3d820"
  },
  {
    "url": "guide/surge-3-pro.html",
    "revision": "d2b45c58deccdf78f053abe308d6fbce"
  },
  {
    "url": "guide/surge-for-mac.html",
    "revision": "1f5ddb9c1f0a735451f185af78a2b5ab"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "38ba420308e3893292377310a4e3d253"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "e226be223c06dc4240c23f00e3835332"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "1634ef329a18c23bc882d8d15a3bf8f4"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "e3b3cd71df1ac8a9c0e234c67b9f6962"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "a42aabd0377cfa41bd293e831c048986"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "39ec26f82586300886f2388f5d7424dc"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "c275f39c35099bfa8711adcca48bceed"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "a42aabd0377cfa41bd293e831c048986"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "47d067e164185302e96783d32583f3b8"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "e94fe6cb35ead97f49c43ed8413b7745"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "89837d3727358a19cac9a0e42d9e5596"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "89837d3727358a19cac9a0e42d9e5596"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "909f2d86c5bd92af2563c1d3b91962ee"
  },
  {
    "url": "index.html",
    "revision": "47db4cfb8fda45aa3fce0b3afdcc827e"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo-blue@3x.png",
    "revision": "2f888e59bad9c0d0136b01ddfb54a5aa"
  },
  {
    "url": "logo.png",
    "revision": "b0823065327e11c635ff46ff49c601f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
