
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Seater/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-LSIR72RC.js",
      "chunk-Q2LAUSLP.js",
      "chunk-HSNMJS3P.js"
    ],
    "route": "/Seater"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7KYXLRM6.js",
      "chunk-LSZPXLC3.js"
    ],
    "route": "/Seater/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2OJZVBKN.js",
      "chunk-LSZPXLC3.js"
    ],
    "route": "/Seater/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SDQNKJPG.js"
    ],
    "route": "/Seater/auth/forget-password"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Seater/dashboard/dashboard",
    "route": "/Seater/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAOAU7QS.js"
    ],
    "route": "/Seater/dashboard/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NMOA26BJ.js"
    ],
    "route": "/Seater/dashboard/trips"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QB3OVGBN.js"
    ],
    "route": "/Seater/dashboard/vehicles"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FKVPUH6S.js"
    ],
    "route": "/Seater/dashboard/drivers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XEWWJVVL.js"
    ],
    "route": "/Seater/dashboard/clients"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2KFO56LC.js"
    ],
    "route": "/Seater/dashboard/analytics"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XHZP3CSA.js"
    ],
    "route": "/Seater/dashboard/notifications"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EPPHEJYR.js"
    ],
    "route": "/Seater/dashboard/settings"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LSIR72RC.js",
      "chunk-Q2LAUSLP.js",
      "chunk-HSNMJS3P.js"
    ],
    "route": "/Seater/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SQVBICR4.js",
      "chunk-Q2LAUSLP.js"
    ],
    "route": "/Seater/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QSR5I4KE.js"
    ],
    "route": "/Seater/about-details"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3PWT3JZK.js",
      "chunk-HSNMJS3P.js"
    ],
    "route": "/Seater/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-67I4CKC2.js"
    ],
    "route": "/Seater/services-info"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F5L5YQKB.js"
    ],
    "route": "/Seater/schools"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JNDXRVIS.js",
      "chunk-5OIW4CY3.js",
      "chunk-LSZPXLC3.js"
    ],
    "route": "/Seater/schoolBooking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-THLIRGYM.js",
      "chunk-5OIW4CY3.js",
      "chunk-LSZPXLC3.js"
    ],
    "route": "/Seater/special-request-booking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UARUXX5D.js"
    ],
    "route": "/Seater/business"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2WVYZUG.js"
    ],
    "route": "/Seater/special-request"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IVDFL42V.js"
    ],
    "route": "/Seater/tracking"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JOTBSHLM.js"
    ],
    "route": "/Seater/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2837, hash: 'a9fe4cc0c52220dbd3eb8cd153858e128a5e9c8f435e64574a0ac384779fe30f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1320, hash: 'c188fbfc4043965a51e8bdb883d3d818070b02d826fbdfd92c2a53b115efa4db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57697, hash: '0a4503eb1cd3a0b1ffda3e1035711aec0d672564ccb554915ae2e2bd240d3d13', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 29235, hash: '6c2adfc9bb2d31703c869b1af2f0558fa25e19c89a93d3e0eea571ac941a2c5c', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 26473, hash: '57c26c06dbbe9477ce5612697bb9d8e1889ad47f445ddc1e26aecbcb1024503e', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'auth/forget-password/index.html': {size: 25448, hash: '149c50799d8a9e0eb03a574be2fb9029a9de558482a85e238a90a9a2bcd4887e', text: () => import('./assets-chunks/auth_forget-password_index_html.mjs').then(m => m.default)},
    'dashboard/dashboard/index.html': {size: 30828, hash: 'a4680340d12e4b98edde4e3d4c62236ac6cc6943b8b09a6ffab7c89e2ca75819', text: () => import('./assets-chunks/dashboard_dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/trips/index.html': {size: 29845, hash: '61c4b3b2401367b5634bdd6eed9aecee3bacbe8fd546837d8038f6e1c4375f38', text: () => import('./assets-chunks/dashboard_trips_index_html.mjs').then(m => m.default)},
    'dashboard/vehicles/index.html': {size: 29384, hash: '0cd43d2a55089c72c9ea7782e622814b5db289c31d96ff9a79d98db851c07685', text: () => import('./assets-chunks/dashboard_vehicles_index_html.mjs').then(m => m.default)},
    'dashboard/drivers/index.html': {size: 29117, hash: 'acb300aa3e70d4755c71e8cab309752f71d8408e3dc4dc7b7f30f5db3bbd6dd3', text: () => import('./assets-chunks/dashboard_drivers_index_html.mjs').then(m => m.default)},
    'dashboard/clients/index.html': {size: 29389, hash: '5d5838b80c096524ee64a877e8588c801196227ed943338bea0f93f8c675ab36', text: () => import('./assets-chunks/dashboard_clients_index_html.mjs').then(m => m.default)},
    'dashboard/analytics/index.html': {size: 28957, hash: '676fbac349d834279ae6d6a86978f764efd9022febd0f4c368e241855e5530db', text: () => import('./assets-chunks/dashboard_analytics_index_html.mjs').then(m => m.default)},
    'dashboard/notifications/index.html': {size: 29296, hash: 'b6bdb96613207f95f435526774f974ddad77ab57a159a6e7d0dd9f1459b0fd4d', text: () => import('./assets-chunks/dashboard_notifications_index_html.mjs').then(m => m.default)},
    'dashboard/settings/index.html': {size: 31228, hash: 'fd90680f7fb532a319bce92c69c078d215cf911b50b920ecefaf472e00250696', text: () => import('./assets-chunks/dashboard_settings_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 57821, hash: 'b6426722d6a6d38d9f2c6e8454027ed314dfbfbea669680ee70b36a45a6539c0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28630, hash: '213678e1a51a82b83656641752e7b06a4ffe0d1bf8317dc1d10b86669a3ad19f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'about-details/index.html': {size: 28979, hash: '63029307b4851b9091175d2774a4ef8b1325f377463ef9f0b4fd5ee7b6f06c43', text: () => import('./assets-chunks/about-details_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32465, hash: 'a76791b491d61a3ff47ead1ca3af62fdaaaf5b5e4015d10c1826e010033e7d13', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services-info/index.html': {size: 31775, hash: 'f6650c2b4ace76b58364d65e0c625de947bbfd16f0a06a1f6d17a88a3ca7561c', text: () => import('./assets-chunks/services-info_index_html.mjs').then(m => m.default)},
    'schools/index.html': {size: 28283, hash: 'c7c76b8ff5d5f8e2f0cb3cce05d66310f091749a57f484b4f1465ed6b9d20628', text: () => import('./assets-chunks/schools_index_html.mjs').then(m => m.default)},
    'schoolBooking/index.html': {size: 25324, hash: 'db0ac324cbb900acc515b64e494dc2c21719071ea2c391a8588eeb71100f551c', text: () => import('./assets-chunks/schoolBooking_index_html.mjs').then(m => m.default)},
    'special-request-booking/index.html': {size: 40970, hash: 'c7e20f4e4c5e6e84f04446b483741640b849f74e050b4899cd964d1b1adc3ca4', text: () => import('./assets-chunks/special-request-booking_index_html.mjs').then(m => m.default)},
    'business/index.html': {size: 25220, hash: 'ea129e2b9139c62b708cb9c1feee41eef1eaf23f7376a2c7256e51c61291832c', text: () => import('./assets-chunks/business_index_html.mjs').then(m => m.default)},
    'special-request/index.html': {size: 25220, hash: 'e3391450672ac5483fc7bd36ad3d1a1ce367558105ad8c07a269184795d4eb7a', text: () => import('./assets-chunks/special-request_index_html.mjs').then(m => m.default)},
    'tracking/index.html': {size: 25220, hash: '00d8dd2af69f227554b25115729dc7a84353076a1de86cc48fe8322254d1a5ae', text: () => import('./assets-chunks/tracking_index_html.mjs').then(m => m.default)},
    'styles-GA6QEMEW.css': {size: 157375, hash: 'iLerOC/9EpU', text: () => import('./assets-chunks/styles-GA6QEMEW_css.mjs').then(m => m.default)}
  },
};
