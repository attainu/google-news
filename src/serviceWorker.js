// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

const cacheName = "googleNews-cache";
const cacheFiles = [
    "/",
    "./CommonCss/CommonCss.css",
    "./CommonCss/loader.css",
    "./Component/Card/css/PostCard.css",
    "./Component/Card/css/SourceCard.css",
    "./Component/Card/css/SourceCardList.css",
    "./Component/Card/BookmarkCard.jsx",
    "./Component/Card/BookmarkCardList.jsx",
    "./Component/Card/FollowingCard.jsx",
    "./Component/Card/FollowingCardList.jsx",
    "./Component/Card/PostCard.jsx",
    "./Component/Card/PostCardList.jsx",
    "./Component/Card/SourceCard.jsx",
    "./Component/Card/SourceCardList.jsx",
    "./Component/SwipeCard/css/SwipeCard.css",
    "./Component/SwipeCard/SingleCard.jsx",
    "./Component/SwipeCard/SwipeCard.jsx",
    "./Component/WeatherCard/css/form.css",
    "./Component/WeatherCard/css/weather.css",
    "./Component/WeatherCard/css/WeatherCard.css",
    "./Component/WeatherCard/Form.jsx",
    "./Component/WeatherCard/Weather.jsx",
    "./Component/WeatherCard/WeatherCard.jsx",
    "./Component/css/HomeBody.css",
    "./Component/css/Navbar.css",
    "./Component/css/NewsCard.css",
    "./Component/css/Pagination.css",
    "./Component/css/SidebarMenu.css",
    "./Config/api.config.js",
    "./Config/firebase.config.js",
    "./Component/HomeBody.jsx",
    "./Component/Navbar.jsx",
    "./Component/Pagination.jsx",
    "./Component/SidebarMenu.jsx",
    "./Page/css/HomePage.css",
    "./Page/css/LoginPage.css",
    "./Page/css/ProfileEdit.css",
    "./Page/css/SplashScreen.css",
    "./Page/BookmarkPage.jsx",
    "./Page/CategoryCountryPage.jsx",
    "./Page/FollowingPage.jsx",
    "./Page/Homepage.jsx",
    "./Page/LoginPage.jsx",
    "./Page/ProfileEditPage.jsx",
    "./Page/SearchResultPage.js",
    "./Page/SourcePage.jsx",
    "./Page/SplashScreen.jsx",
    "./Page/TopStoriesPage.jsx",
    "./Page/WorldNewsPage.jsx",
    "./redux/action/authAction.js",
    "./redux/action/bookmarkAction.js",
    "./redux/action/categoryActions.js",
    "./redux/action/followingAction.js",
    "./redux/action/getFirebaseAction.js",
    "./redux/action/searchAction.js",
    "./redux/action/sourceAction.js",
    "./redux/action/storiesAction.js",
    "./redux/action/worldNewsAction.js",
    "./redux/reducer/authReducer.js",
    "./redux/reducer/bookmarkReducer.js",
    "./redux/reducer/categoryReducer.js",
    "./redux/reducer/followingReducer.js",
    "./redux/reducer/getFirebaseReducer.js",
    "./redux/reducer/searchReducer.js",
    "./redux/reducer/sourceReducer.js",
    "./redux/reducer/storiesReducer.js",
    "./redux/reducer/worldNewsReducer.js",
    "./redux/actionTypes.js",
    "./redux/rootReducer.js",
    "./redux/store.js",
    "./App.js",
    "./App.test.js",
    "./index.js",
    "./logo.svg",
    "./setupTests.js",
    "./serviceWorker.js",
    "../public/images/48.png",
    "../public/images/72.png",
    "../public/images/96.png",
    "../public/images/144.png",
    "../public/images/192.png",
    "../public/images/512.png",
    "../public/favicon.ico",
    "../public/index.html",
    "../public/manifest.json",
    "../public/robots.txt"


];

window.self.addEventListener("install", (event) => {
    const cacheRequests = async () => {
        const googleNewsCache = await caches.open(cacheName);
        await googleNewsCache.addAll(cacheFiles);
    };
    event.waitUntil(cacheRequests());
});
window.self.addEventListener("active", (event) => {
    console.log("active");
});
window.self.addEventListener("fetch", (event) => {
    const matchCaches = async () => {
        // const response = await cache.match(event.request.url);
        // if (response === undefined) return fetch(event.request.url).catch(error => {
        //     return caches.match('./offline.html')
        // });
        // return response;
    };
    event.respondWith(matchCaches());
});

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
