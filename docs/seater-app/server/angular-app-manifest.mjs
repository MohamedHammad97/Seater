
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-YN7K3SRZ.js",
      "chunk-RK4VHAWK.js",
      "chunk-XZGMEYWX.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H47NKOEE.js",
      "chunk-RSZG7OHI.js"
    ],
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XCEB6G2V.js",
      "chunk-RSZG7OHI.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SYBDS343.js"
    ],
    "route": "/auth/forget-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YN7K3SRZ.js",
      "chunk-RK4VHAWK.js",
      "chunk-XZGMEYWX.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KLMNY5PT.js",
      "chunk-RK4VHAWK.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZUK7DOMM.js"
    ],
    "route": "/about-details"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FQZ4SUIU.js",
      "chunk-XZGMEYWX.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LQ363EMV.js"
    ],
    "route": "/services-info"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QWNGZ66Z.js"
    ],
    "route": "/schools"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZQDPPZQR.js",
      "chunk-RSZG7OHI.js"
    ],
    "route": "/schoolBooking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WDF2FD3L.js"
    ],
    "route": "/business"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6MOAEQRF.js"
    ],
    "route": "/special-request"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P7Z55VLT.js"
    ],
    "route": "/tracking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NSM5K3D7.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2778, hash: '221d7a616513274c0adc335f83d42aa6fee47c898ea36c2a32346585af7be49e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1261, hash: '2caa24cbed9ac36fa0a685a1fd19b69cc275c1f6a8729374a594f64474ed853c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 62723, hash: '5cfdc2d0a5a0873abedae39538111cd0ca98df9b2dac3fbdf91c982fc0e3eaa7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 23895, hash: '0021a17a98d09d415e954e384c58c97992d70988b79c1fffaf3156d68620fb2c', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 23895, hash: '9d5ae06f77b64ae48c15dfbbcc582ca0b38571bf31054ecbfebdb02c2de1c0f4', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'auth/forget-password/index.html': {size: 23843, hash: '02f1add1219911c56610d8a1389c1d83b3c198d2aa245294bcafea555235ad87', text: () => import('./assets-chunks/auth_forget-password_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 62847, hash: '10b0ab4792278cf952884c8f34150dd4db8db4bd5b836bbb31b21302ecad47d9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 27171, hash: '89a6d728fcc0a59fd191c5b1ed065c0f520bffccdb69875ac21c9cd9342482cd', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'about-details/index.html': {size: 27571, hash: '4fb5994af7c70c0bd00302f14df7eaab37e874da1eb6fe28cd27c7bd5ff6ac2f', text: () => import('./assets-chunks/about-details_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 31057, hash: '473ec0d9145b8508eebceb89d13a4cfb7675063780c827527f7c15b40d8972b2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services-info/index.html': {size: 30413, hash: 'a5215b4722bdd912d984e22ff7e29e7a434eda686c95a296098574d1a9419c2e', text: () => import('./assets-chunks/services-info_index_html.mjs').then(m => m.default)},
    'schools/index.html': {size: 26797, hash: '981929b808f72f1aba0e87f6828bd6c39f571c38dd588b58a91e95bee18b077f', text: () => import('./assets-chunks/schools_index_html.mjs').then(m => m.default)},
    'schoolBooking/index.html': {size: 44065, hash: '8ba0542f371044983625d5f0db0d8ffead96962dc4d3e97ff6819df5d8106efd', text: () => import('./assets-chunks/schoolBooking_index_html.mjs').then(m => m.default)},
    'business/index.html': {size: 23843, hash: 'e7c1978962298e6bff3862bdb5aa223b3561a1a4891bfb64d7bd297e20d7fb32', text: () => import('./assets-chunks/business_index_html.mjs').then(m => m.default)},
    'special-request/index.html': {size: 23843, hash: 'bf64e6213b17c04fb551deba9564c9ac424ed12104858f8fc4d6bc503c89528d', text: () => import('./assets-chunks/special-request_index_html.mjs').then(m => m.default)},
    'tracking/index.html': {size: 23843, hash: '7602db663a4c48af08afaa4c46fd590baa7b933ee73937be9e4100270ee5863c', text: () => import('./assets-chunks/tracking_index_html.mjs').then(m => m.default)},
    'styles-DGJXX2KP.css': {size: 142976, hash: 'G4iaY6EgtaY', text: () => import('./assets-chunks/styles-DGJXX2KP_css.mjs').then(m => m.default)}
  },
};
