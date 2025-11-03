
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MDHUQ6UH.js",
      "chunk-ES5FMV55.js",
      "chunk-K4FGD7ME.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-77CIPGLI.js",
      "chunk-7GMIKD4Z.js"
    ],
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-THHEOJLJ.js",
      "chunk-7GMIKD4Z.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AVY5NHZN.js"
    ],
    "route": "/auth/forget-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MDHUQ6UH.js",
      "chunk-ES5FMV55.js",
      "chunk-K4FGD7ME.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UA32BQNI.js",
      "chunk-ES5FMV55.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V5ZNGNUR.js"
    ],
    "route": "/about-details"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GMQTMR5Z.js",
      "chunk-K4FGD7ME.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IQEU3TZ2.js"
    ],
    "route": "/services-info"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U36OWWMZ.js"
    ],
    "route": "/schools"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2WT2J5DJ.js",
      "chunk-7GMIKD4Z.js"
    ],
    "route": "/schoolBooking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y2AQWYSY.js"
    ],
    "route": "/business"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DV6JS7S5.js"
    ],
    "route": "/special-request"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YKD2SFXA.js"
    ],
    "route": "/tracking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SK2W5OT2.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2778, hash: '3a76ab1e9f11ba4d196794222f4688f700664c03510e992e9aca8871abfd1ca0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1261, hash: '3d53de63c5925b336651beaacd2b4f894eda5f54a5aa4c3f6481a1e60dd03e8f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57575, hash: '0852cc696cb4a15cc09223c16adc20d68ba54f5a17c0d6c9b5a1802a327b5515', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 29090, hash: '635da8257023acd3ca920b750f1349862428408ca6ba25aa1419ee1c4b744928', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 26326, hash: '5b626f3f9600e28126486cc180418049f0be9838199151330c9462e9476fc0ab', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'auth/forget-password/index.html': {size: 25326, hash: 'c2d4e95791eb06332fb5f9a71884b8faac526d89a860f9a8834215613a445cf0', text: () => import('./assets-chunks/auth_forget-password_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 57699, hash: '63a1108956f2fcbf08b6a7b09bceb49983d17bab908daa9ce14efbb2ccbbdeab', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28508, hash: '2ba1ddb1da80b5aef4829c48934668349b4312dc412a2e403c2b9c11da6d4c38', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'about-details/index.html': {size: 28857, hash: '4d51c2879a35077aa4a39124ead55797b8aeb52d254a560b1105059654ae73f0', text: () => import('./assets-chunks/about-details_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32343, hash: '07610a698161e2d9e7d1e10ddaff0b486ff290e1dc026d5d19a921f0c383c02b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services-info/index.html': {size: 31653, hash: '652565f0c0cec4271efe7db69239d8700abefc00ed82a8155041ed54a7ebe24c', text: () => import('./assets-chunks/services-info_index_html.mjs').then(m => m.default)},
    'schools/index.html': {size: 28161, hash: '1a790bdcd303aea436c7535a38302a1e5ed0626037dfefba6265cd01940833c0', text: () => import('./assets-chunks/schools_index_html.mjs').then(m => m.default)},
    'schoolBooking/index.html': {size: 25150, hash: '681dcaf10b7739dfd0bff633c5a4193eb5c1b297d3498f0ddf4068435b3ff0b4', text: () => import('./assets-chunks/schoolBooking_index_html.mjs').then(m => m.default)},
    'business/index.html': {size: 25098, hash: 'e6dc90de7ba8fd362c7b90e52f2c37b0f4c32ed5fd3fbf1cf21ff92fdbf6bc96', text: () => import('./assets-chunks/business_index_html.mjs').then(m => m.default)},
    'special-request/index.html': {size: 25098, hash: '68f373646fad19314a0351f8aca9a806992437a132fbd22a6af051f7eb113ff0', text: () => import('./assets-chunks/special-request_index_html.mjs').then(m => m.default)},
    'tracking/index.html': {size: 25098, hash: 'ca5954a9503e96b829ae89e521ec0a1b875717e5da0375d5f7fe5e1b5605bbb2', text: () => import('./assets-chunks/tracking_index_html.mjs').then(m => m.default)},
    'styles-6GIJ36P4.css': {size: 143942, hash: '2ATUV3jgBEo', text: () => import('./assets-chunks/styles-6GIJ36P4_css.mjs').then(m => m.default)}
  },
};
