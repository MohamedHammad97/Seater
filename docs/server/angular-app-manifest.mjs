
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-EQD2BTMN.js",
      "chunk-LIU7O2AO.js",
      "chunk-JLYFKTOY.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EII4DITW.js",
      "chunk-TKZMRWDS.js"
    ],
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6PCZNPBV.js",
      "chunk-TKZMRWDS.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6VOQIBEE.js"
    ],
    "route": "/auth/forget-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EQD2BTMN.js",
      "chunk-LIU7O2AO.js",
      "chunk-JLYFKTOY.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3J52OFYY.js",
      "chunk-LIU7O2AO.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MXIF4ERB.js"
    ],
    "route": "/about-details"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OMCMUGPK.js",
      "chunk-JLYFKTOY.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JH4QDXGG.js"
    ],
    "route": "/services-info"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSPTRQST.js"
    ],
    "route": "/schools"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QWU3U5HE.js",
      "chunk-TKZMRWDS.js"
    ],
    "route": "/schoolBooking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YD6BCO7T.js"
    ],
    "route": "/business"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TEXXCCOH.js"
    ],
    "route": "/special-request"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KQKMGQUK.js"
    ],
    "route": "/tracking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NVDCV2VL.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2778, hash: '5e65e2a27d4872b9a730401d05b11af13934082033e3f8a6431ec83b05e03a29', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1261, hash: 'b83cb2ac294f7379b9df1ffe7eeb7dbcfaafbdcfbbba871d09469889246f50b2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63255, hash: '528863abb8f387f848a631b6e930ce62e7486a97067f5364694f0a607755ee0c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 37037, hash: 'd6086da84fc73abfdaf4612278dfa6e9b9a829b36fd208d7f58c1fa03ccbc8ed', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 34273, hash: '560e8c1669e0d607b5bf065573022a8f3581632c2d3201c9d68602c890060ac0', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'auth/forget-password/index.html': {size: 24648, hash: '9109b1d11eb7df1d672d430aba13668c293d57125f12de3cd343b44a0194d82a', text: () => import('./assets-chunks/auth_forget-password_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 63379, hash: '9367bef035745200318bfca08013da65d12c02a1e84bf8e12c2ba090efe49555', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 27748, hash: '9ff193d5d65cde58e1bca2d38f3c1ef56a3b0f9f10816d4314eb5b4fa9327942', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'about-details/index.html': {size: 28148, hash: 'a2b4432c6f65041697dd33cfa38be0904707e9b1a904fa9b5b582bee6e620143', text: () => import('./assets-chunks/about-details_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 31634, hash: '57c431ede8a893b004eb30c9b99a3045f21427e01b824d1cef13e94f35485432', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services-info/index.html': {size: 30941, hash: '9d165ec55fa1f876e9ce06f1125062b1d45a284cdeced8c9f4f10ea944af3d76', text: () => import('./assets-chunks/services-info_index_html.mjs').then(m => m.default)},
    'schools/index.html': {size: 27325, hash: '618747a8345ce6ddacb2e8e72bd58a4c5b517670bda16e63de6dcf79eac3c1e2', text: () => import('./assets-chunks/schools_index_html.mjs').then(m => m.default)},
    'schoolBooking/index.html': {size: 44593, hash: 'd1df7ee7d41c3dbe0156a2531f48739288b76142c7a5c849f9c30c6631176703', text: () => import('./assets-chunks/schoolBooking_index_html.mjs').then(m => m.default)},
    'business/index.html': {size: 24420, hash: '9e48c7732086c624cc05fd1a452ca9c84524736e3c7c0463bbde74815e6efb55', text: () => import('./assets-chunks/business_index_html.mjs').then(m => m.default)},
    'special-request/index.html': {size: 24420, hash: '2be891a43bb322a90cb3adeefc5440107cc1ecb298c39c39ef5676dedfce94ea', text: () => import('./assets-chunks/special-request_index_html.mjs').then(m => m.default)},
    'tracking/index.html': {size: 24420, hash: 'f9e4e61faf63eaa41d52f5a3c4e84885248ad4d853e0eb6d4357dcd8e4a862cf', text: () => import('./assets-chunks/tracking_index_html.mjs').then(m => m.default)},
    'styles-32U7AZGH.css': {size: 143069, hash: 'lRQCpSJ5rwo', text: () => import('./assets-chunks/styles-32U7AZGH_css.mjs').then(m => m.default)}
  },
};
