'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "03459b1024a797ec0009e2b324fa062f",
"version.json": "393cb727e323f196ea0dce12e1cd5b91",
"index.html": "a919a3be875d3cb18c0964b300d50d52",
"/": "a919a3be875d3cb18c0964b300d50d52",
"main.dart.js": "1806d5112c1fdc2cf1c9a98b92eddd77",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "c03fc9670c0fec86dbcc34c43f74ad26",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/static.yml": "b818f9f7a0c1a31a48c37addfc81a6a7",
"manifest.json": "badaefcf4e94199d27b516b0be55d2c7",
"main.dart.wasm": "8477b566f7e1dd2efba6de924b526ac9",
".git/AUTO_MERGE": "e3fe74d2fa23e2014f531c14692a83a1",
".git/REBASE_HEAD": "21260250b80700cb8e9522bd9c78bcd7",
".git/ORIG_HEAD": "21260250b80700cb8e9522bd9c78bcd7",
".git/MERGE_MSG": "e27f221b361fac168411f49dc7942e20",
".git/config": "72671603a432100ae50b7ea3b4d50b84",
".git/objects/3e/676530087599537c82b74d32dfcb9d29d81127": "4d9d4002913372586497213464457dab",
".git/objects/50/ca888d60df496aa1fc9ae974d0a0c069262df9": "1af4d6c3c3910efe4c6a284f8c0ea355",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/2dd52719e051a5fd9086dcf3a113dbaef22eb3": "b9869fa5ac04b912c0dbf2945409f608",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/94/ef43cd7367de877fe9ef2f087c6d7a2539112b": "c418b92894f02862abae21ef6b1603ca",
".git/objects/05/4cd3a42d8f6db72307096ff7841e2fec126fa0": "a172e415696fb74b6c5b38398bcd5270",
".git/objects/ad/a0104f37e84af2b76a7d0827a1181b914ca32f": "0146710b749f7bfbecc28b654fdf4f80",
".git/objects/d1/b4808f82c4d947404e64223b704b865a5342f2": "a1358e9c33da5ef363abe67bc8b86b52",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/55de04739f9592863f4ed9a6a0ea5608794a94": "77dd4f0c4e4428ff7e20dd391fceed7e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/677bc09063273483abdfc22b86b1130cae4af8": "921ae5e4141e06d86ffefcfdc87a358a",
".git/objects/f2/ba1ac36f5d53e494fcedaa951c802cbff365e5": "13050595c99d5e720ee63366e9b48d59",
".git/objects/e3/e61a7e92f48485bc326db8eabc2df5b8ef608b": "4adadfbfc72e30919698b8e12ad02a54",
".git/objects/c1/64ea7e02fb3d28466b4c9927d4cc229c045037": "c14189d76f8b19191f2a6fdbd2d238af",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/pack/pack-51bdb5bcce2f47b69649d16aa5a5a74336763ecc.pack": "1e28801eccee5740bbc461299cf64d7c",
".git/objects/pack/pack-51bdb5bcce2f47b69649d16aa5a5a74336763ecc.idx": "5685656eeb31a4c3b651336230854fba",
".git/objects/16/8efb142330d7ad1f3ed6c272333bb96ae213af": "51c703dbc486ada720e763844246ca6f",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/8f/00cb2cb5857f2aeac79e7b319952e8a414111b": "cc8381423a69dea8ca12bcd1c6b1b706",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/d46de4e6840a55f0edc58c13995f34b1e40379": "1a71d1d8fa72cb0644cc67345b8dccbc",
".git/objects/6e/b72ba1e273f5de13fcdc9b291072ab551df97a": "f042ad07ba751c6386692021ea073369",
".git/objects/36/77e041ecc25278282d22a99822cc6fe7c6630f": "d673dce85bb2662479704a1b6c5bf9da",
".git/objects/62/2718d3f2f16531fb92cdf068f72581a6526ad4": "6c8f66e3fe5139b841161430122afce4",
".git/objects/5e/8d003f8fe21f5428b0dfaf87ac3e2c76ecde72": "e0a82b956461ff679de57876119c2b46",
".git/objects/5e/a9e8e364d687ec11c434bc3f5b21727927e81f": "b05dea5d1537e41acd668efd7cba8ae9",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/356669cf8bdcadf1e308f3822abcbc2619e6d6": "fcf4ba18fd7bb913d1c6754154caac34",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/55/5a9f250a28621ab775bd41445b8b8cdbe8d38d": "fabd758f65d3987f09e170e22bb0b011",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/8e400dbaf23280e453c43894a73f6c905c99d2": "873df0ffb70a75c1fa8c7997e9ccf1f6",
".git/objects/d3/80896b5ae43015c68dc2ed0a219bea2e4f8fce": "c1a2e3f625605e8d9c49a054051a67a2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c1a8fc986f079b6985e5add22a9a010da112ee": "1199ffa2ce9ff5d5ea8052fa6d9e68af",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ef/d4865211cd97cb66aee6777aeb2ace71e3ad78": "9e465e4811b09d67dc61fd1df774e8b9",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/f91c69b1461810fc39a7df1ec458949ab08b06": "ee9416fa9630edcb10d8559ec1386a7a",
".git/objects/e0/b1f6ee706263847bfab11260c4fe615634eb7e": "ec10cefd346774ac758f8d6af141a406",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c1a02b45b16b638f05bf8f4bb81beb08f7febd": "1596f2f5d1c2ff5ed8c8964457bf8ca7",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/2d/76ecf7d0750ae34e1feb120f96a96c79e0505d": "d936dd28ca0c69e0b67d99fbaf49b95d",
".git/objects/70/183c3380ede14584e2b282be284dc98baebdbe": "19cb46271481aac1b6ac567aef5db857",
".git/objects/24/4195e9270d669c2bddd8ffb25310c17ec7531a": "ca37700e24e60fba94029ecb94ec0629",
".git/objects/23/2e062b400952532fa1bee10b911954333f33d5": "cd562b77be01544c22a80de013c18cbb",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/7bc9631544f93f3d4fa702399087ccbfb59733": "2b50118ae6c21dfd7c96f9875459784d",
".git/objects/76/245dbf30e799d9e1a633c47a34e91b57949455": "10a9189d22f7ff482f9d4d5d8f04f7d5",
".git/objects/1c/c35ae32466ee1a7ca22d58cb264401a92fc4b6": "dca8362a6856e8d1a5f56889dc832789",
".git/objects/49/1570ac9f2f07669c1b08d708208c4d8ec556b8": "5ffc484712b1836f5d20ddfbd5c68d30",
".git/objects/2b/29cf6b8aeaadbfcbc21b4e8c0bd389c96d7596": "4191bb5d9ed230c2fe179251467426a2",
".git/objects/2b/d6b94a82363aea84821878248ca9766cc01eda": "afeba9d6036d81489f4571274f6f23cf",
".git/HEAD": "418d202f3c41ea5c765ae6db8ccae797",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bf42f67d7137503b059dec54ec6ca9e4",
".git/logs/refs/heads/main": "c5130aa13d1acc4faaf142c5dfb4debe",
".git/logs/refs/remotes/origin/main": "9db1c547bd5d5765a915dae8bcf45b6a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "21260250b80700cb8e9522bd9c78bcd7",
".git/refs/remotes/origin/main": "418d202f3c41ea5c765ae6db8ccae797",
".git/index": "a31bafe1870fd628a683acf4f437846c",
".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
".git/FETCH_HEAD": "7f7fd2afeeeecd3c41891760d55af4af",
".git/rebase-merge/git-rebase-todo.backup": "3e0a219c460d82191242679dbb4b1c0b",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/orig-head": "21260250b80700cb8e9522bd9c78bcd7",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "aaf19a1ae6d978aec3c2c14ad25a3a42",
".git/rebase-merge/onto": "418d202f3c41ea5c765ae6db8ccae797",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/done": "0e03a766bdcc190ac90139416d56a98e",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "21260250b80700cb8e9522bd9c78bcd7",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/author-script": "4831805f1e945715453e769967615304",
"assets/success.json": "cf57bbd4e7ef446aeee118f60c782f82",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/successCrackers.json": "167af25f2c17e37f03083657ab919dad",
"assets/NOTICES": "f4013e715805a89b52f9ab58082c2a00",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6aafb6d6ab2fa640b6998f6b72583349",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "dfa7f494d09a13d40018d77fefc6c89b",
"assets/assets/success.json": "bccb652dc7652e6c6554fdc91c95bb3a",
"assets/assets/successCrackers.json": "167af25f2c17e37f03083657ab919dad",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
