
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Seater/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MDHUQ6UH.js",
      "chunk-ES5FMV55.js",
      "chunk-K4FGD7ME.js"
    ],
    "route": "/Seater"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-77CIPGLI.js",
      "chunk-7GMIKD4Z.js"
    ],
    "route": "/Seater/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-THHEOJLJ.js",
      "chunk-7GMIKD4Z.js"
    ],
    "route": "/Seater/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AVY5NHZN.js"
    ],
    "route": "/Seater/auth/forget-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MDHUQ6UH.js",
      "chunk-ES5FMV55.js",
      "chunk-K4FGD7ME.js"
    ],
    "route": "/Seater/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UA32BQNI.js",
      "chunk-ES5FMV55.js"
    ],
    "route": "/Seater/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V5ZNGNUR.js"
    ],
    "route": "/Seater/about-details"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GMQTMR5Z.js",
      "chunk-K4FGD7ME.js"
    ],
    "route": "/Seater/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IQEU3TZ2.js"
    ],
    "route": "/Seater/services-info"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U36OWWMZ.js"
    ],
    "route": "/Seater/schools"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2WT2J5DJ.js",
      "chunk-7GMIKD4Z.js"
    ],
    "route": "/Seater/schoolBooking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y2AQWYSY.js"
    ],
    "route": "/Seater/business"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DV6JS7S5.js"
    ],
    "route": "/Seater/special-request"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YKD2SFXA.js"
    ],
    "route": "/Seater/tracking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SK2W5OT2.js"
    ],
    "route": "/Seater/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2785, hash: '54f4b9fd88e8f83e4e2d12e5f24bed9fa7157be030dbfd96fff5dd4b8a52ce72', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1268, hash: '65be3459f2c9e674ee51cb387dd2cd25a43e401dd518e2ad8994253de50fbc9a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57666, hash: '7671f97ad99fe8c13053b1a730285cbd5ca1f4b423fe999cd13bef9b7a3fbddb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 29132, hash: 'a4a1161dcb98304fb56019f6060472defe2a28e0628b5cd6050b8a9c886d41c6', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 26368, hash: 'aaef92eb45f5100c30ad4ca90763d7048308c14fbef88d90ff990a1447d88523', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'auth/forget-password/index.html': {size: 25417, hash: '95309c4aa939f4253b5321cbb081fd63559842a4c4cc0102680ecb696747c4c6', text: () => import('./assets-chunks/auth_forget-password_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 57790, hash: '47bf848a90df0ed20a03ccea0002a9a2760b55635f34b8951f2694a090da42fe', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28599, hash: 'c2cb017146fd760fdd62eb0422c285227b08ead6d5371bffcd68664e4c5921d9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'about-details/index.html': {size: 28948, hash: '83a8762815dc925e5c337a9642c6f2552813b2eede344e6870dc5e1555d131e8', text: () => import('./assets-chunks/about-details_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32434, hash: 'c7205033071d450f6812cab76563583007955d5cb1cd5a0252128b382c3a8a97', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services-info/index.html': {size: 31744, hash: '353a4219b916296905e52e15e74d57aaedfb551a491cd3432f6a96ce302d91d3', text: () => import('./assets-chunks/services-info_index_html.mjs').then(m => m.default)},
    'schools/index.html': {size: 28252, hash: 'c61b009f30d93034fb05410dd99dd292469600533a5b596e36ff63a769480447', text: () => import('./assets-chunks/schools_index_html.mjs').then(m => m.default)},
    'schoolBooking/index.html': {size: 25241, hash: 'c43d86e582fc31978038c3601f86a1e36949d493b7cfbf4582e845ae6268e6cf', text: () => import('./assets-chunks/schoolBooking_index_html.mjs').then(m => m.default)},
    'business/index.html': {size: 25189, hash: 'e4b4fe9c82e13397e240a1a978be00f6f93304c4bdb102df1f08a6fc5ea283de', text: () => import('./assets-chunks/business_index_html.mjs').then(m => m.default)},
    'special-request/index.html': {size: 25189, hash: '9ae055f7883935d650471aa0e5eb8b6d7fadd291204e182d19f920fcadf4e142', text: () => import('./assets-chunks/special-request_index_html.mjs').then(m => m.default)},
    'tracking/index.html': {size: 25189, hash: 'e100d759ee5b06500965f42f4d130ca6e306bbed13f103f91c276daf3e8cf1a2', text: () => import('./assets-chunks/tracking_index_html.mjs').then(m => m.default)},
    'styles-6GIJ36P4.css': {size: 143942, hash: '2ATUV3jgBEo', text: () => import('./assets-chunks/styles-6GIJ36P4_css.mjs').then(m => m.default)}
  },
};
