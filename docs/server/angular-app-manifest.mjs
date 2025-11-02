
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://MohamedHammad97.github.io/Seater/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-EQD2BTMN.js",
      "chunk-LIU7O2AO.js",
      "chunk-JLYFKTOY.js"
    ],
    "route": "/Seater"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EII4DITW.js",
      "chunk-TKZMRWDS.js"
    ],
    "route": "/Seater/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6PCZNPBV.js",
      "chunk-TKZMRWDS.js"
    ],
    "route": "/Seater/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6VOQIBEE.js"
    ],
    "route": "/Seater/auth/forget-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EQD2BTMN.js",
      "chunk-LIU7O2AO.js",
      "chunk-JLYFKTOY.js"
    ],
    "route": "/Seater/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3J52OFYY.js",
      "chunk-LIU7O2AO.js"
    ],
    "route": "/Seater/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MXIF4ERB.js"
    ],
    "route": "/Seater/about-details"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OMCMUGPK.js",
      "chunk-JLYFKTOY.js"
    ],
    "route": "/Seater/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JH4QDXGG.js"
    ],
    "route": "/Seater/services-info"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSPTRQST.js"
    ],
    "route": "/Seater/schools"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QWU3U5HE.js",
      "chunk-TKZMRWDS.js"
    ],
    "route": "/Seater/schoolBooking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YD6BCO7T.js"
    ],
    "route": "/Seater/business"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TEXXCCOH.js"
    ],
    "route": "/Seater/special-request"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KQKMGQUK.js"
    ],
    "route": "/Seater/tracking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NVDCV2VL.js"
    ],
    "route": "/Seater/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2818, hash: 'd1d0cb7f6331f83edb828b92495252cd77792b42ab18522a38df07ff6d74a000', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1301, hash: 'b284c7ddc7f100c62685a0a73e9920d81fb14f1741059e06101d124e12c3f530', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63695, hash: '8008bfa16a896cc3b7ccabdded20c60f7385a4f57c81bccc040dd30432c7662e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 37517, hash: '80c8d83993b6f5e8ca11c7259023a6bac48f910a2f414c487101074328478db9', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 34753, hash: '503faf7f8069f52ad42af51c0460cae4869be9710bac5fce85dd39e5d8639598', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'auth/forget-password/index.html': {size: 25088, hash: '1d26948140a90c4e7c0eecb054fa25d03501de1b8bf80a2fa482cfec8b465cc9', text: () => import('./assets-chunks/auth_forget-password_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 63819, hash: '67d7312c87b15301f2a908e8ba450d8a448c9181e9db9560bf9b044f347073bf', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28188, hash: 'a03d6d51f5ac0557a1e3d2cdb18484e6ed7b827b3c966d7c213b1309ec7f4472', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'about-details/index.html': {size: 28588, hash: '2899adb78e8c271949cd3ecba1400756fe4f3d488721cbbd34b9c62b5f2e0cfb', text: () => import('./assets-chunks/about-details_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32074, hash: '8cdd32b5fd4651cf1dc94c962b91708dda323d5085118fc08f84dd9faefbefb5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services-info/index.html': {size: 31381, hash: '432e8f4708ed5445ed739c789e2043586005655c0adcaf79f10cad899ae9c455', text: () => import('./assets-chunks/services-info_index_html.mjs').then(m => m.default)},
    'schools/index.html': {size: 27765, hash: 'face1efedb7849310ea1e8c02181ae55af7da740d33335e91f8827ad787344b4', text: () => import('./assets-chunks/schools_index_html.mjs').then(m => m.default)},
    'schoolBooking/index.html': {size: 45033, hash: 'f2f3de63050a675b3fda2b68be60533df3ec826c132242100b659c8496defb9d', text: () => import('./assets-chunks/schoolBooking_index_html.mjs').then(m => m.default)},
    'business/index.html': {size: 24860, hash: '1fea36926a08a2ed4ee67601cfaff251b31c038d3e286b36bf381f7f90e7d150', text: () => import('./assets-chunks/business_index_html.mjs').then(m => m.default)},
    'special-request/index.html': {size: 24860, hash: '6f9fa40f4ee78ec17018a0b5f582e7ddefe3286334f9e50677547f9cd0bb10ce', text: () => import('./assets-chunks/special-request_index_html.mjs').then(m => m.default)},
    'tracking/index.html': {size: 24860, hash: '9f805052680ec7c92e5a176b952b18d50b1dc2f401dc9541986030a298f891ff', text: () => import('./assets-chunks/tracking_index_html.mjs').then(m => m.default)},
    'styles-32U7AZGH.css': {size: 143069, hash: 'lRQCpSJ5rwo', text: () => import('./assets-chunks/styles-32U7AZGH_css.mjs').then(m => m.default)}
  },
};
