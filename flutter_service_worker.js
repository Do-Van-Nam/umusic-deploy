'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "5ba94d045b0b749e725f19968cf98af5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.bin": "9f6287c4120e0f1a21a98344930d452e",
"assets/AssetManifest.bin.json": "5053bc792bd1be1853f62dfadf02a1b7",
"assets/AssetManifest.json": "8f8b598241fa31829e2c661b3b243038",
"assets/assets/images/3%25201.png": "90a71811a7f4c02f2af6162b0bd75626",
"assets/assets/images/abstract-red-blue-blur-4k-yt%25201.png": "ce97ad63a9a1b044bfa079a208847857",
"assets/assets/images/app_name.png": "0568592990161159f5eeffec3ed325ad",
"assets/assets/images/app_store.png": "d4cb20ddf69c2b9edc8981d8ee3c0486",
"assets/assets/images/en.png": "64fd621862f9f2624bac5c186bdf2834",
"assets/assets/images/feature.png": "1c088e98bfc2682ece4c507489955481",
"assets/assets/images/flags/en.png": "64fd621862f9f2624bac5c186bdf2834",
"assets/assets/images/flags/la.png": "79a2e99b2c1ef7416c30be12afa19b8c",
"assets/assets/images/flags/vn.png": "56c34ffc9fbb61872297f618870931a2",
"assets/assets/images/google_play.png": "0cd2801d043d7e19b2eddf354d9bee88",
"assets/assets/images/image%2520copy%25202.png": "0bc06e5d8ce736fee6daf7b3855b2edf",
"assets/assets/images/image%2520copy.png": "160f5278ea7af7f4c1a7da2dca8c412b",
"assets/assets/images/image.png": "1ad00f242055c4f0fddcc6f0431852c6",
"assets/assets/images/img.png": "74ff5ddad6d40827223a7294def18f3d",
"assets/assets/images/la.png": "79a2e99b2c1ef7416c30be12afa19b8c",
"assets/assets/images/logo.png": "d3623ac699ac93aebc82c06733c485f2",
"assets/assets/images/phones.png": "af45b60bbc89a70886f3adbd5e729deb",
"assets/assets/images/qr_android.png": "1267fedb8d0c398f1e7ef0f0802e4381",
"assets/assets/images/qr_ios.png": "baa294107a01e4b45fe0f3e535bace79",
"assets/assets/images/Rectangle%25206166-1.png": "9be351d04ceb8e1978c97729e8f1a43d",
"assets/assets/images/Rectangle%25206166-10.png": "29f834470be4db7cfac0443ecd573b4d",
"assets/assets/images/Rectangle%25206166-11.png": "de298ad36620e0d97ee6c00be7e6edb9",
"assets/assets/images/Rectangle%25206166-12.png": "c8c39c09e56a747e292ffae5c7434535",
"assets/assets/images/Rectangle%25206166-13%2520copy.png": "614eae838e81b5f61764be621a4889e4",
"assets/assets/images/Rectangle%25206166-13.png": "614eae838e81b5f61764be621a4889e4",
"assets/assets/images/Rectangle%25206166-14.png": "de298ad36620e0d97ee6c00be7e6edb9",
"assets/assets/images/Rectangle%25206166-15.png": "c8c39c09e56a747e292ffae5c7434535",
"assets/assets/images/Rectangle%25206166-2.png": "77261578e69c6665be0f83eb6dde44a8",
"assets/assets/images/Rectangle%25206166-3.png": "30dbedb9663a252a1a68717a86107735",
"assets/assets/images/Rectangle%25206166-4.png": "77b9a48e781fbeb2d2874c3484b8f732",
"assets/assets/images/Rectangle%25206166-5.png": "8d7121b070d2e3d8e4e3604ec3e43679",
"assets/assets/images/Rectangle%25206166-6.png": "29f834470be4db7cfac0443ecd573b4d",
"assets/assets/images/Rectangle%25206166-7.png": "de298ad36620e0d97ee6c00be7e6edb9",
"assets/assets/images/Rectangle%25206166-8.png": "c8c39c09e56a747e292ffae5c7434535",
"assets/assets/images/Rectangle%25206166-9.png": "614eae838e81b5f61764be621a4889e4",
"assets/assets/images/Rectangle%25206166.png": "c37da30b4a3f38fad26c73588e9082d8",
"assets/assets/images/security_shield.png": "562d3adcdceca96d189284ae27efd4ca",
"assets/assets/images/vn.png": "56c34ffc9fbb61872297f618870931a2",
"assets/assets/images/white_logo.png": "0fc0e06de40da99baa37a59f9122e41a",
"assets/assets/images/woman1.png": "e70dcdba8720ff82ef30c48e41f4de6e",
"assets/assets/images/woman2.png": "4055ea58e23415f68a6e2c3ff802675b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "76aa279c133cc817ed431db74e2c9c16",
"assets/NOTICES": "c685a536d60cc08a011851e0d79b4894",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3b3195dcbd3762c628849d79e3b8602b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9cb02e070c25b03f2077e64f5d3a8077",
"/": "9cb02e070c25b03f2077e64f5d3a8077",
"main.dart.js": "2136187867d70860c27fe4b5ddae89b5",
"manifest.json": "71e0154c18320c9ca4cbf26c3e30935d",
"version.json": "322dfa94430cc69aa45ce83495f46466"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
