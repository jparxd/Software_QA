if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,d,r)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const f={uri:location.origin+c.slice(1)};return Promise.all(d.map(c=>{switch(c){case"exports":return i;case"module":return f;default:return e(c)}})).then(e=>{const c=r(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.2001827ab51ea35c16d9.bundle.js",revision:"8fa5e47333a6341066c0b995a0d6c19c"},{url:"5.c0a31fc70b2dd1648103.bundle.js",revision:"3d44c8fdec5fb016ff1b3d31cee9eb10"},{url:"apple-touch-icon.png",revision:"1be5b78cac4007d580c665d170dfa3b3"},{url:"browserconfig.xml",revision:"f422643f69978430a467930f63d7a941"},{url:"favicon.ico",revision:"b8499a3d28c9b11a7b5aaaf70003adf1"},{url:"img/47d5e02832a083558ddd7c5ef8baae02.svg",revision:"1364c01051f21b1d83b7d018d8c44ccb"},{url:"img/96860fdd2f001e8edad5e0bdc5f71b7c.png",revision:"386a62f05bc173ef503483ec29bfdca8"},{url:"img/9e589c8265f399fca2e50b0220cb8c21.svg",revision:"786d89b5e65cca29ceefa320c415aa16"},{url:"img/b82e870a12a8cbabd701bc6ef708cce5.svg",revision:"d8df5272dd47d8ecf390a6ef1a5a8aa7"},{url:"img/fa8f33d6d6e3997f9256f58e31a3b85b.svg",revision:"1a28f2a529887ea4b254be5f1e90b510"},{url:"img/github.svg",revision:"23fc8f81f92bb2981d8f9e089d7df14a"},{url:"img/like.svg",revision:"335eff6a0aefd9ce25d8624c9cae2f54"},{url:"img/logo.svg",revision:"1c62d5e1a9782ca0891117e1b46be44f"},{url:"img/tiles/large.png",revision:"b704a8e8003d43c3904ca92e8aff0123"},{url:"img/tiles/medium.png",revision:"20ec03ea123b7468e58e39b6efc67707"},{url:"img/tiles/small.png",revision:"3527bfe7a2ec1464e2fa83ccbc17a73f"},{url:"img/tiles/wide.png",revision:"3f8e3b9c4099f3a030e79eac741c9818"},{url:"img/touch/chrome-touch-icon-192x192.png",revision:"09e2bcdec5002f356327361c55bee4c3"},{url:"img/touch/icon-128x128 2.png",revision:"8d79e83d57ab1745548eb2df1dfca230"},{url:"img/touch/icon-128x128.png",revision:"0a0256a8009590c91c60fd628aafd2cf"},{url:"img/touch/icon-144x144.png",revision:"a5f0a9b4f16edf84dc3e66c06a7d7f22"},{url:"img/touch/icon-512x512.png",revision:"52090f8f62b770165f1bdc431b2adc5b"},{url:"index.adfc134cacc30f537a5e.js",revision:"34c134d003915dd6c3a32060980c00fa"},{url:"index.ae660a9ec987cef811d7.css",revision:"5a9ec7362b27bd8a1fd89f4ffa396af5"},{url:"index.html",revision:"c897d2bc65394de90b7077fb0557d99c"},{url:"shared.6b495fa3c0867ba654c7.js",revision:"f0529449bdced778dd2ae1673f5a40bf"},{url:"site.webmanifest",revision:"fb46bfc75f7cf370ad417ef77d758da7"},{url:"vendors~index.13bb8a692b9df6f0f1f5.bundle.js",revision:"5b1e12014d76ba56a9a55ec1e8bfea3c"},{url:"vendors~index.9cd8424fc298dd8c11a6.css",revision:"ef42e471807d9a7208be654d7bc151bd"},{url:"vendors~index~shared.f8e544587fad1594ed66.bundle.js",revision:"2ac91e2820d1482eb5d5dfe075de8dab"}],{})}));
